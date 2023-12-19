import { Address, useAccount, useBalance, useChainId } from "wagmi"
import { getTokenDisplayedDecimals, type NetworkToken } from "@/config/tokens"

export function useTokenBalance(token?: Address) {
  const { address } = useAccount()
  const chain = useChainId()
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
        getTokenDisplayedDecimals(chain, token),
      )} ${data?.symbol}`,
    ...rest,
  }
}
