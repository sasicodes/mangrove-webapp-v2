import { MangroveAddresses } from "./type";

export const mumbaiConfig = {
  mangrove: "0x80cd6Ef14c23dD3957FD5629141a9d7028557c39",
  mangroveOracle: "0xC0fB136768e4b7725d674B8Bcd366A5dc2b5F976",
  mangroveReader: "0x26d24Dd4aFcB9D1cD30baf804Fa22aFa643327CD"
} as const satisfies MangroveAddresses;