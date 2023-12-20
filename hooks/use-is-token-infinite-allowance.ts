import { useQuery } from "@tanstack/react-query"
import { Address } from "viem"
import { erc20ABI, useAccount, usePublicClient } from "wagmi";

export const useIsTokenInfiniteAllowance = (
  token?: Address,
  spender?: Address,
) => {
  const publicClient = usePublicClient();
  const { address: owner } = useAccount();
  return useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["isTokenInfiniteAllowance", token, owner, spender],
    queryFn: async () => {
      if (!(token && owner && spender)) return null
      const res = await publicClient.readContract({
        abi: erc20ABI,
        address: token,
        functionName: "allowance",
        args: [owner, spender],
      })
      // big enough number
      return res > 2n ** 200n;
    },
    enabled: !!token && !!spender,
    meta: {
      error: "Failed to fetch token allowance",
    },
  })
}
