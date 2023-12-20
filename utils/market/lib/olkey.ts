import {
  type Address,
  type Hex,
  encodeFunctionResult,
  keccak256,
  size,
} from "viem";
import { MangroveABI } from "@/config/abis/mangrove";
import { InvalidBytesLengthError } from "../errors";

/**
 * An OLKey object represents a pair of tokens and a tick spacing.
 * @param outbound_tkn The address of the outbound token.
 * @param inbound_tkn The address of the inbound token.
 * @param tickSpacing The tick spacing.
 */
export type OLKeyType = {
  outbound_tkn: Address;
  inbound_tkn: Address;
  tickSpacing: bigint;
};

/**
 * An OLKey object represents a pair of tokens and a tick spacing.
 * @param outbound_tkn The address of the outbound token.
 * @param inbound_tkn The address of the inbound token.
 * @param tickSpacing The tick spacing.
 * @throws InvalidBytesLengthError if the hash is not 96 bytes (should not throw as it is computed on the fly)
 */
export class OLKey implements OLKeyType {
  outbound_tkn: `0x${string}`;
  inbound_tkn: `0x${string}`;
  tickSpacing: bigint;

  constructor(ol: OLKeyType) {
    this.outbound_tkn = ol.outbound_tkn;
    this.inbound_tkn = ol.inbound_tkn;
    this.tickSpacing = ol.tickSpacing;
  }

  public hash(): Hex {
    const bytes = encodeFunctionResult({
      abi: MangroveABI,
      functionName: "olKeys",
      result: this,
    });

    if (size(bytes) !== 96) throw new InvalidBytesLengthError();
    return keccak256(bytes);
  }

  public fliped(): OLKey {
    return new OLKey({
      outbound_tkn: this.inbound_tkn,
      inbound_tkn: this.outbound_tkn,
      tickSpacing: this.tickSpacing,
    });
  }
}
