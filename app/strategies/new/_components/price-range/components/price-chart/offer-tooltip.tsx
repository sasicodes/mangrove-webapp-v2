import { Token } from "@mangrovedao/mangrove.js"
import { TooltipWithBounds } from "@visx/tooltip"
import { ScaleLinear } from "d3-scale"

import { Title } from "@/components/typography/title"
import { cn } from "@/utils"
import { GeometricOffer } from "./geometric-distribution-dots"

type Props = {
  height: number
  paddingBottom: number
  xScale: ScaleLinear<number, number>
  onHover?: (offer: GeometricOffer) => void
  onHoverOut?: () => void
  hoveredGeometricOffer: GeometricOffer
  baseToken: Token
  quoteToken: Token
}

export function StatusBadge({ isLive }: { isLive: boolean }) {
  return (
    <div
      className={cn(
        "rounded py-0.5 pl-1 pr-2 inline-flex space-x-0.5 items-center",
        {
          "bg-primary-dark-green text-green-caribbean": isLive,
          "bg-cloud-500 text-cloud-00": !isLive,
        },
      )}
    >
      <span
        className={cn("w-1 h-1 rounded-full mx-1", {
          "bg-green-caribbean": isLive,
          "bg-cloud-00": !isLive,
        })}
      />
      <Title variant={"title3"} className="text-inherit capitalize">
        {isLive ? "Live" : "Empty"}
      </Title>
    </div>
  )
}

export default function OfferTooltip({
  height,
  paddingBottom,
  xScale: xScaleTransformed,
  hoveredGeometricOffer,
  baseToken,
  quoteToken,
}: Props) {
  return (
    <TooltipWithBounds
      top={height - paddingBottom}
      left={xScaleTransformed(hoveredGeometricOffer.price.toNumber())}
      className="!bg-transparent"
    >
      <div
        className={cn("p-4 rounded-lg bg-[#0F1212] space-y-2 border", {
          "border-cherry-400": hoveredGeometricOffer.type === "ask",
          "border-green-bangladesh": hoveredGeometricOffer.type === "bid",
        })}
      >
        <StatusBadge isLive />
        <div className="text-white">
          <span className="text-cloud-300">Price:</span>{" "}
          {hoveredGeometricOffer.price.toFixed(quoteToken?.displayedDecimals)}{" "}
          {quoteToken?.symbol}
        </div>
        <div className="text-white">
          <span className="text-cloud-300">Volume:</span>{" "}
          {hoveredGeometricOffer.gives.toFixed(baseToken?.displayedDecimals)}{" "}
          {baseToken?.symbol}
        </div>
      </div>
    </TooltipWithBounds>
  )
}
