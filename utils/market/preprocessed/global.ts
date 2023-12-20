import { MangroveABI } from "@/config/abis";
import { ContractFunctionResult, toHex } from "viem";
import { ONES } from "../constants";

export type MangroveGlobalConfig = ContractFunctionResult<
  typeof MangroveABI,
  "globalUnpacked"
>;

// number of bits in each field
const monitor_bits = 160n;
const useOracle_bits = 1n;
const notify_bits = 1n;
const gasprice_bits = 26n;
const gasmax_bits = 24n;
const dead_bits = 1n;
const maxRecursionDepth_bits = 8n;
const maxGasreqForFailingOffers_bits = 32n;

// number of bits before each field
const monitor_before = 0n + 0n;
const useOracle_before = monitor_before + monitor_bits;
const notify_before = useOracle_before + useOracle_bits;
const gasprice_before = notify_before + notify_bits;
const gasmax_before = gasprice_before + gasprice_bits;
const dead_before = gasmax_before + gasmax_bits;
const maxRecursionDepth_before = dead_before + dead_bits;
const maxGasreqForFailingOffers_before =
  maxRecursionDepth_before + maxRecursionDepth_bits;

// focus-mask: 1s at field location, 0s elsewhere
const useOracle_mask_inv =
  ((ONES << (256n - useOracle_bits)) & ONES) >> useOracle_before;
const notify_mask_inv =
  ((ONES << (256n - notify_bits)) & ONES) >> notify_before;
const dead_mask_inv = ((ONES << (256n - dead_bits)) & ONES) >> dead_before;

export function unpackMangroveGlobalConfig(data: bigint): MangroveGlobalConfig {
  return {
    monitor: toHex(((data << monitor_before) & ONES) >> (256n - monitor_bits), {
      size: 20,
    }),
    useOracle: (data & useOracle_mask_inv) > 0n,
    notify: (data & notify_mask_inv) > 0n,
    gasprice: ((data << gasprice_before) & ONES) >> (256n - gasprice_bits),
    gasmax: ((data << gasmax_before) & ONES) >> (256n - gasmax_bits),
    dead: (data & dead_mask_inv) > 0n,
    maxRecursionDepth:
      ((data << maxRecursionDepth_before) & ONES) >>
      (256n - maxRecursionDepth_bits),
    maxGasreqForFailingOffers:
      ((data << maxGasreqForFailingOffers_before) & ONES) >>
      (256n - maxGasreqForFailingOffers_bits),
  };
}

