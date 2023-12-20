import { MAX_SAFE_VOLUME, MAX_TICK, MIN_TICK } from "./constants";

export class TickOutOfBoundsError extends RangeError {
  constructor() {
    super(`Value of tick must be between ${MIN_TICK} and ${MAX_TICK}`, {
      cause: "TickOutOfBoundsError",
    });
  }
}

export class AmountTooHighError extends RangeError {
  constructor() {
    super(`Amount must be less than ${MAX_SAFE_VOLUME}`, {
      cause: "AmountTooHighError",
    });
  }
}

export class InvalidBytesLengthError extends Error {
  constructor() {
    super("Invalid bytes length");
  }
}
