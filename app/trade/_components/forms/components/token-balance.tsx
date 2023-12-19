import { Skeleton } from "@/components/ui/skeleton"
import { useTokenBalance } from "@/hooks/use-token-balance"
import { Address } from "viem"

export function TokenBalance({ token }: { token?: Address }) {
  const { formattedWithSymbol, formatted, isFetching } = useTokenBalance(token)
  return (
    <div className="flex justify-between items-center mt-2">
      <span className="text-xs text-secondary float-left">Balance:</span>
      {!token || isFetching ? (
        <Skeleton className="w-24 h-4" />
      ) : (
        <span className="text-xs float-right" title={formatted?.toString()}>
          {formattedWithSymbol}
        </span>
      )}
    </div>
  )
}
