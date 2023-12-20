import { MangroveReaderABI, MangroveABI } from "@/config/abis";
import { ContractFunctionResult } from "viem";
import { ONES } from "../constants";

export type MangroveLocalConfig = ContractFunctionResult<
  typeof MangroveReaderABI,
  "localUnpacked"
>;

export const DEFAULT_CONFIG: MangroveLocalConfig = {
  active: false,
  fee: 0n,
  density: 0n,
  binPosInLeaf: 0n,
  level1: 0n,
  level2: 0n,
  level3: 0n,
  root: 0n,
  kilo_offer_gasbase: 0n,
  lock: false,
  last: 0n,
};

// number of bits in each field
const active_bits = 1n;
const fee_bits = 8n;
const density_bits = 9n;
const binPosInLeaf_bits = 2n;
const level3_bits = 64n;
const level2_bits = 64n;
const level1_bits = 64n;
const root_bits = 2n;
const kilo_offer_gasbase_bits = 9n;
const lock_bits = 1n;
const last_bits = 32n;

// number of bits before each field
const active_before = 0n + 0n;
const fee_before = active_before + active_bits;
const density_before = fee_before + fee_bits;
const binPosInLeaf_before = density_before + density_bits;
const level3_before = binPosInLeaf_before + binPosInLeaf_bits;
const level2_before = level3_before + level3_bits;
const level1_before = level2_before + level2_bits;
const root_before = level1_before + level1_bits;
const kilo_offer_gasbase_before = root_before + root_bits;
const lock_before = kilo_offer_gasbase_before + kilo_offer_gasbase_bits;
const last_before = lock_before + lock_bits;

// focus-mask: 1s at field location, 0s elsewhere
const active_mask_inv =
  ((ONES << (256n - active_bits)) & ONES) >> active_before;
const lock_mask_inv = ((ONES << (256n - lock_bits)) & ONES) >> lock_before;

export function unpackLocalConfig(data: bigint): MangroveLocalConfig {
  return {
    active: (data & active_mask_inv) > 0n,
    fee: ((data << fee_before) & ONES) >> (256n - fee_bits),
    density: ((data << density_before) & ONES) >> (256n - density_bits),
    binPosInLeaf:
      ((data << binPosInLeaf_before) & ONES) >> (256n - binPosInLeaf_bits),
    level3: ((data << level3_before) & ONES) >> (256n - level3_bits),
    level2: ((data << level2_before) & ONES) >> (256n - level2_bits),
    level1: ((data << level1_before) & ONES) >> (256n - level1_bits),
    root: ((data << root_before) & ONES) >> (256n - root_bits),
    kilo_offer_gasbase:
      ((data << kilo_offer_gasbase_before) & ONES) >>
      (256n - kilo_offer_gasbase_bits),
    lock: (data & lock_mask_inv) > 0n,
    last: ((data << last_before) & ONES) >> (256n - last_bits),
  };
}
