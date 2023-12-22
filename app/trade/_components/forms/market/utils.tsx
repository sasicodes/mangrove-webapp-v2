import { Market, type Token } from "@mangrovedao/mangrove.js"
import Big from "big.js"
import { toast } from "sonner"

import { TokenIcon } from "@/components/token-icon"
import { Caption } from "@/components/typography/caption"
import { Title } from "@/components/typography/title"
import { Separator } from "@/components/ui/separator"
import { bsToBa } from "@/utils/market"
import type { TradeMode } from "../enums"
import { TradeAction } from "../enums"

export function successToast(
  tradeMode: TradeMode,
  tradeAction: TradeAction,
  baseToken: Token,
  baseValue: string,
  result: Market.OrderResult,
) {
  const formatDecimals = (value?: Big) =>
    value ? value.toFixed(baseToken.displayedAsPriceDecimals) : undefined
  const summary = result.summary
  const price = formatDecimals(result.offerWrites[0]?.offer.price)
  const tradeValue = formatDecimals(Big(baseValue))
  const fillText = summary.partialFill ? "Partially filled" : "Filled"

  toast(
    <div className="grid p-2 gap-2 w-full">
      <div className="flex space-x-1 items-center">
        <TokenIcon symbol={baseToken.symbol} />
        <div className="grid">
          <Title variant={"title3"}>{tradeMode.toUpperCase()} Order</Title>
          <Caption variant={"caption2"} className="text-muted-foreground">
            {fillText}
          </Caption>
        </div>
      </div>

      <Separator />

      <div className="grid">
        <div className="flex justify-between">
          <Caption
            className={
              tradeAction === TradeAction.BUY
                ? "text-green-500"
                : "text-red-600"
            }
          >
            {tradeAction.toUpperCase()}
          </Caption>
          <Caption>
            {tradeValue} {baseToken.symbol}
          </Caption>
        </div>
        <div className="flex justify-between">
          <Caption className="text-muted-foreground">PRICE</Caption>
          <Caption>$ {price ?? "-"}</Caption>
        </div>
      </div>
    </div>,
    { duration: 5000 },
  )
}

export function handleOrderResultToastMessages(
  result: Market.OrderResult,
  tradeAction: TradeAction,
  market: Market,
) {
  const { base } = market
  const baseDecimals = base.decimals
  const isBuy = tradeAction === TradeAction.BUY
  const summary = result.summary
  if (summary.partialFill && !result.restingOrder && summary.totalGot?.eq(0)) {
    toast.success("Order hasn't been filled", {
      className: "bg-orange-400",
    })
    return
  }

  const fillText = summary.partialFill ? "\npartially filled" : "filled"
  let msg = `Order for ${base.toFixed(baseDecimals)} ${base.symbol} ${fillText}`

  if (summary.partialFill) {
    const filled = isBuy ? summary.totalGot : summary.totalGave
    msg += ` with ${Big(filled ?? 0).toFixed(baseDecimals)} ${base.symbol}`
  }

  if (summary.partialFill && result.restingOrder) {
    const { gives, price } = result.restingOrder
    const wants = Market.getWantsForPrice(bsToBa(tradeAction), gives, price)
    const remaining = isBuy ? wants : result.restingOrder.gives
    msg += `\nResting order for ${remaining.toFixed(baseDecimals)} ${
      base.symbol
    }\nposted on the book`
    // setTimeout(() => {
    //   queryClient.invalidateQueries(["openOrdersQuery"])
    // }, 2000)
  }

  // refresh history only if an history line has been created
  // if (summary.totalGot?.gt(0)) {
  //   setTimeout(() => {
  //     queryClient.invalidateQueries(["orderHistory"])
  //   }, 2000)
  // }
  toast.success(msg)
}
