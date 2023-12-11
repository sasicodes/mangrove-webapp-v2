"use client"

import { useAccount } from "wagmi"

import useIndexerSdk from "@/providers/mangrove-indexer"
import useMarket from "@/providers/market"
import { useQuery } from "@tanstack/react-query"
import { parseOrders, type Order } from "./schema"

type Params<T> = {
  filters?: {
    first?: number
    skip?: number
  }
  select?: (data: Order[]) => T
}

export function useOrders<T = Order[]>({
  filters: { first = 10, skip = 0 } = {},
  select,
}: Params<T> = {}) {
  const { address, isConnected } = useAccount()
  const { olKeys } = useMarket()
  const { indexerSdk } = useIndexerSdk()

  return useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: [
      "orders",
      indexerSdk,
      olKeys?.ask.token.address,
      olKeys?.bid.token.address,
      address,
      first,
      skip,
    ],
    queryFn: async () => {
      if (!(indexerSdk && address && olKeys)) return []
      const result = await indexerSdk.getOpenLimitOrders({
        ask: olKeys.ask,
        bid: olKeys.bid,
        first,
        skip,
        maker: address.toLowerCase(),
      })
      return parseOrders(result)
    },
    select,
    meta: {
      error: "Unable to retrieve orders",
    },
    enabled: !!(isConnected && olKeys && indexerSdk),
  })
}
