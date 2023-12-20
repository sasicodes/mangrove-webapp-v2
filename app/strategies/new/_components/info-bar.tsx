"use client"
import { redirect, useSearchParams } from "next/navigation"
import type { Address } from "viem"

import { TokenPair } from "@/components/token-pair"
import { Button } from "@/components/ui/button"
import { useTokenFromId } from "@/hooks/use-token-from-id"
import { Minus, Plus } from "lucide-react"
import { Badge } from "../../_components/badge"
import { getTokenWithSymbol } from "@/config/tokens"
import { useChainId } from "wagmi"

export function InfoBar() {
  const searchParams = useSearchParams()
  const market = searchParams.get("market")
  const [baseId, quoteId] = market?.split(",") ?? [] as Address[]
  // const { data: baseToken } = useTokenFromId(baseId as Address)
  // const { data: quoteToken } = useTokenFromId(quoteId as Address)
  const chain = useChainId();

  // redirect to /strategies if no market is selected
  if (!(market && baseId && quoteId)) return redirect("/strategies")

  const baseToken = getTokenWithSymbol(chain, baseId);
  const quoteToken = getTokenWithSymbol(chain, quoteId);

  if (!baseToken || !quoteToken) return null
  return (
    <div className="border-b">
      <div className="flex justify-between items-center py-6 px-4 max-w-8xl mx-auto">
        <span className="flex items-center space-x-4">
          <TokenPair
            baseToken={baseToken}
            quoteToken={quoteToken}
            tokenClasses="w-[28px] h-[28px]"
          />
          <Badge>Step 2/2</Badge>
        </span>
        <span className="flex space-x-3">
          <Button
            variant={"tertiary"}
            className="h-8 w-8 text-white"
            size={"icon"}
          >
            <Minus />
          </Button>
          <Button
            variant={"tertiary"}
            className="h-8 w-8 text-white"
            size={"icon"}
          >
            <Plus />
          </Button>
        </span>
      </div>
    </div>
  )
}
