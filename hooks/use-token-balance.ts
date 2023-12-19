import { Address, useAccount, useBalance } from "wagmi"
import type { NetworkToken } from "@/config/tokens"

export function useTokenBalance(token?: Address) {
  const { address } = useAccount()
  const { data, ...rest } = useBalance({
    address,
    token,
    watch: false,
  })

  return {
    balance: data?.value,
    formatted: data?.formatted,
    formattedWithSymbol:
      data &&
      `${Number(data.formatted).toFixed(
        token?.displayedDecimals,
      )} ${data?.symbol}`,
    ...rest,
  }
}
