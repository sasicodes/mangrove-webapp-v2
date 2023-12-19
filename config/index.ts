import { polygonMumbai } from "viem/chains"
import { MangroveAddresses } from "./type"
import { mumbaiConfig } from "./mumbai"

type Addresses = Record<number, MangroveAddresses>

export const SUPPORTED_CHAIN_IDS = [polygonMumbai.id] as const;

export const MANGROVE_ADDRESSES = {
  [polygonMumbai.id]: mumbaiConfig
} as const satisfies Addresses;