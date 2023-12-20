import type { Token } from "@mangrovedao/mangrove.js"
import { useQuery } from "@tanstack/react-query"
import { Address } from "viem"
import { erc20ABI, useAccount, usePublicClient } from "wagmi";

export const useTokenAllowance = (token?: Address, spender?: Address) => {
  const publicClient = usePublicClient();
  const { address: owner } = useAccount()
  return useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["tokenAllowance", token, owner, spender],
    queryFn: () => {
      if (!(token && owner && spender)) return null
      return publicClient.readContract({
        abi: erc20ABI,
        address: token,
        functionName: "allowance",
        args: [owner, spender],
      })
    },
    enabled: !!token && !!spender,
    meta: {
      error: "Failed to fetch token allowance",
    },
  })
}
