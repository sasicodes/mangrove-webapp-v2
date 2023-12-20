import type { Token } from "@mangrovedao/mangrove.js"

import { cn } from "@/utils"
import { TokenIcon } from "./token-icon"
import { Title } from "./typography/title"
import { Skeleton } from "./ui/skeleton"
import { NetworkToken } from "@/config/tokens"

type Props = {
  baseToken?: NetworkToken
  quoteToken?: NetworkToken
  className?: string
  tokenClasses?: string
  titleProps?: React.ComponentProps<typeof Title>
}

export function TokenPair({
  baseToken,
  quoteToken,
  className,
  tokenClasses,
  titleProps,
}: Props) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="flex -space-x-2">
        {!baseToken || !quoteToken ? (
          <>
            <Skeleton className={cn(tokenClasses, "rounded-full")} />
            <Skeleton className={cn(tokenClasses, "rounded-full")} />
          </>
        ) : (
          <>
            <TokenIcon symbol={baseToken.parentSymbol} className={tokenClasses} />
            <TokenIcon symbol={quoteToken.parentSymbol} className={tokenClasses} />
          </>
        )}
      </div>
      {!baseToken || !quoteToken ? (
        <Skeleton className="h-7 w-32" />
      ) : (
        <Title
          variant={"header1"}
          {...titleProps}
        >{`${baseToken.parentSymbol}/${quoteToken.parentSymbol}`}</Title>
      )}
    </div>
  )
}
