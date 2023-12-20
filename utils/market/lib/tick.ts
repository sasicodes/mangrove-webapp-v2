import { MAX_SAFE_VOLUME, MAX_TICK, MIN_TICK } from "../constants";
import { AmountTooHighError, TickOutOfBoundsError } from "../errors";

export { AmountTooHighError, TickOutOfBoundsError };
export { MIN_TICK, MAX_TICK, MAX_SAFE_VOLUME };
export { OLKey, type OLKeyType } from "./olkey";

/**
 * A Tick object represents a tick value.
 *
 * @remarks A tick value is a number between MIN_TICK and MAX_TICK.
 *
 * It represents a value corresponding to a price between two assets such as:
 *
 * price = 1.0001 * 10 ** tick
 *
 * @example
 * // create a tick object from value
 * try {
 *   const tick = Tick.wrap(value);
 * } catch (e) {
 *   if (e instanceof TickOutOfBoundsError) // handle error
 * }
 *
 * // create a tick object from volumes
 * const inboundVolume = 100000000000000000000n;
 * const outboundVolume = 100000000000000000000n;
 *
 * try {
 *   const tick = Tick.tickFromVolumes(inboundVolume, outboundVolume);
 * } catch (e) {
 *   if (e instanceof AmountTooHighError) // handle error
 *   if (e instanceof TickOutOfBoundsError) // handle error
 * }
 */
export class Tick {
  private _value = 0n;

  /**
   * @param value The value of the tick. Must be between MIN_TICK and MAX_TICK.
   */
  public get value(): bigint {
    return this._value;
  }

  private set value(value: bigint) {
    if (!Tick.inRange(value)) throw new TickOutOfBoundsError();
    this._value = value;
  }

  /**
   * @private Cannot be used to create a tick. Use Tick.wrap instead.
   * @param value The value of the tick. Must be between MIN_TICK and MAX_TICK.
   */
  private constructor(value: bigint) {
    this.value = value;
  }

  /**
   * Creates a Tick object from a value.
   *
   * @throws TickOutOfBoundsError if the value is not between MIN_TICK and MAX_TICK.
   * @param value The value of the tick. Must be between MIN_TICK and MAX_TICK.
   * @returns A Tick object.
   * @example
   *
   * try {
   *   const tick = Tick.wrap(value);
   * } catch (e) {
   *   if (e instanceof TickOutOfBoundsError) // handle error
   * }
   */
  public static wrap(value: bigint): Tick {
    return new Tick(value);
  }

  /**
   * Checks if a value is between MIN_TICK and MAX_TICK.
   * @param value The value of the tick
   * @returns true if the value is between MIN_TICK and MAX_TICK, false otherwise.
   * @example
   * const test = Tick.inRange(MAX_TICK);
   * console.log(test); // true
   *
   * const test = Tick.inRange(MIN_TICK - 1n);
   * console.log(test); // false
   */
  public static inRange(value: bigint): boolean {
    return value >= MIN_TICK && value <= MAX_TICK;
  }

  /**
   * Checks if a tick is equal to another tick.
   * @param other The other tick to compare to.
   * @returns true if the value of the two ticks are equal, false otherwise.
   * @example
   * const tick1 = Tick.wrap(0n);
   * const tick2 = Tick.wrap(0n);
   * const tick3 = Tick.wrap(1n);
   *
   * console.log(tick1.eq(tick2)); // true
   * console.log(tick1.eq(tick3)); // false
   */
  public eq(other: Tick): boolean {
    return this.value === other.value;
  }

  /**
   * Creates a Tick object from volumes.
   * @param inboundAmt amount of inbound asset
   * @param outboundAmt amount of outbound asset
   * @returns A Tick instance corresponding to the price between the two assets.
   * @throws AmountTooHighError if either inboundAmt or outboundAmt is greater than MAX_SAFE_VOLUME.
   * @throws TickOutOfBoundsError if the value of the tick is not between MIN_TICK and MAX_TICK.
   * @example
   * const inboundVolume = 100000000000000000000n;
   * const outboundVolume = 100000000000000000000n;
   *
   * try {
   *   const tick = Tick.tickFromVolumes(inboundVolume, outboundVolume);
   * } catch (e) {
   *   if (e instanceof AmountTooHighError) // handle error
   *   if (e instanceof TickOutOfBoundsError) // handle error
   * }
   */
  public static tickFromVolumes(inboundAmt: bigint, outboundAmt: bigint): Tick {
    // return tickFromVolumes(inboundAmt, outboundAmt);
    if (inboundAmt > MAX_SAFE_VOLUME || outboundAmt > MAX_SAFE_VOLUME)
      throw new AmountTooHighError();

    // This implementation is not correct, but it is close enough for now.
    const price = Number(inboundAmt) / Number(outboundAmt);
    const tick = Tick.wrap(
      BigInt(Math.floor(Math.log(price) / Math.log(1.0001)))
    );
    return tick;
  }

  /**
   * Gets the price corresponding to the tick value.
   *
   * @remarks The price is a number and not a bigint.
   *
   * By using the floating point number type, we lose precision.
   *
   * This precision loss is acceptable because it is tested to be lower than 0.01%.
   *
   * @returns The price corresponding to the tick value.
   */
  public priceFromTick(): number {
    return 1.0001 ** Number(this.value);
  }

  /**
   * Gets the amount of outbound asset from the amount of inbound asset
   *
   * Use this function over `outboundFromInboundUp`.
   *
   * @remarks We are rounding down the result.
   * @param inboundAmt the amount of inbound asset
   * @returns the amount of outbound asset
   * @throws AmountTooHighError if inboundAmt is greater than MAX_SAFE_VOLUME.
   * @example
   * const inboundVolume = 100000000000000000000n;
   *
   * try {
   *   const tick = Tick.wrap(value);
   *   const outboundVolume = tick.outboundFromInbound(inboundVolume);
   *   // do something with outboundVolume
   * } catch (e) {
   *   if (e instanceof AmountTooHighError) // handle error
   * }
   */
  public outboundFromInbound(inboundAmt: bigint): bigint {
    if (inboundAmt > MAX_SAFE_VOLUME) throw new AmountTooHighError();
    const price = this.priceFromTick();
    return BigInt(Math.floor(Number(inboundAmt) / price));
  }

  /**
   * Gets the amount of outbound asset from the amount of inbound asset
   *
   * Prefer using `outboundFromInbound` over this function.
   *
   * @param inboundAmt amount of inbound asset
   * @returns the amount of outbound asset
   * @throws AmountTooHighError if inboundAmt is greater than MAX_SAFE_VOLUME.
   * @deprecated Use `outboundFromInbound` instead.
   */
  public outboundFromInboundUp(inboundAmt: bigint): bigint {
    if (inboundAmt > MAX_SAFE_VOLUME) throw new AmountTooHighError();
    const price = this.priceFromTick();
    return BigInt(Math.ceil(Number(inboundAmt) / price));
  }

  /**
   * Gets the amount of inbound asset from the amount of outbound asset
   *
   * Prefer using `inboundFromOutboundUp` over this function.
   *
   * @param outboundAmt amount of outbound asset
   * @returns the amount of inbound asset
   * @throws AmountTooHighError if outboundAmt is greater than MAX_SAFE_VOLUME.
   * @deprecated Use `inboundFromOutboundUp` instead.
   */
  public inboundFromOutbound(outboundAmt: bigint): bigint {
    if (outboundAmt > MAX_SAFE_VOLUME) throw new AmountTooHighError();
    const price = this.priceFromTick();
    return BigInt(Math.floor(Number(outboundAmt) * price));
  }

  /**
   * Gets the amount of inbound asset from the amount of outbound asset
   *
   * Use this function over `inboundFromOutbound`.
   *
   * @param outboundAmt amount of outbound asset
   * @returns the amount of inbound asset
   * @throws AmountTooHighError if outboundAmt is greater than MAX_SAFE_VOLUME.
   * @example
   *
   * const outboundVolume = 100000000000000000000n;
   *
   * try {
   *   const tick = Tick.wrap(value);
   *   const inboundVolume = tick.inboundFromOutboundUp(outboundVolume);
   *   // do something with inboundVolume
   * } catch (e) {
   *   if (e instanceof AmountTooHighError) // handle error
   * }
   */
  public inboundFromOutboundUp(outboundAmt: bigint): bigint {
    if (outboundAmt > MAX_SAFE_VOLUME) throw new AmountTooHighError();
    const price = this.priceFromTick();
    return BigInt(Math.ceil(Number(outboundAmt) * price));
  }
}
