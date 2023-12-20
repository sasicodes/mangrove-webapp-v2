import type { Address } from "viem"

import { TokenPair } from "@/components/token-pair"
import { getTokenFromChainAndAddress } from "@/config/tokens"
import { useChainId } from "wagmi"

type Props = {
  base: Address
  quote: Address
}
export function Market({ base, quote }: Props) {
  const chain = useChainId()
  const baseToken = getTokenFromChainAndAddress(chain, base)
  const quoteToken = getTokenFromChainAndAddress(chain, quote)
  if (!baseToken || !quoteToken) return null
  return (
    <div className="flex items-center space-x-2">
      <TokenPair
        titleProps={{
          variant: "title3",
          className: "text-sm text-current font-normal",
          as: "span",
        }}
        tokenClasses="w-6 h-6"
        baseToken={baseToken}
        quoteToken={quoteToken}
      />
    </div>
  )
}
