"use client"
import { LucideChevronRight } from "lucide-react"
import React from "react"

import {
  CustomRadioGroup,
  CustomRadioGroupItem,
} from "@/components/stateless/custom-radio-group"
import { NumericInput } from "@/components/stateless/numeric-input"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import useMarket from "@/providers/market"
import { Label } from "@components/ui/label"
import LimitOrder from "./components/limit-order"
import MarketOrder from "./components/market-order"
import Menu from "./components/menu"

export default function TradeInputs({
  className,
}: React.ComponentProps<"div">) {
  const [marketType, setMarketType] = React.useState("Market")
  const { selectedMarket } = useMarket()

  return (
    <div className={className}>
      {/* Menu */}
      <Menu setMarketType={setMarketType} />
      <Separator />
      <ScrollArea className="h-[calc(100vh-(var(--bar-height)*3))] overflow-hidden">
        <div className="px-4 space-y-4 mt-[24px]">
          {/* Radio Input*/}
          <CustomRadioGroup defaultValue="Buy">
            <CustomRadioGroupItem value="Buy" id="r1">
              <div>Buy</div>
            </CustomRadioGroupItem>
            <CustomRadioGroupItem value="Sell" id="r2">
              <div>Sell</div>
            </CustomRadioGroupItem>
          </CustomRadioGroup>

          <div className="space-y-4 !mt-6">
            <div className="flex-col flex">
              {/* Buy Input*/}
              <Label>Send amount</Label>
              <NumericInput
                icon={selectedMarket?.base.name}
                symbol={selectedMarket?.base.name}
                disabled={!selectedMarket}
              />
              <div>
                <span className="pt-2 text-xs text-secondary float-left">
                  Balance:
                </span>
                <span className="pt-2 text-xs float-right">
                  {"1234.12"} {selectedMarket?.base.name}
                </span>
              </div>
            </div>

            <div className="flex-col flex">
              {/* Pay Input */}
              <Label>Receive amount</Label>
              <NumericInput
                icon={selectedMarket?.quote.name}
                symbol={selectedMarket?.quote.name}
                disabled={!selectedMarket}
              />
              <div>
                <span className="pt-2 text-xs text-secondary float-left">
                  Balance:
                </span>
                <span className="pt-2 text-xs float-right">
                  {"1234.12"} {selectedMarket?.quote.name}
                </span>
              </div>
            </div>

            {/* Conditional Inputs */}
            {marketType === "Limit" && <LimitOrder />}
            {marketType === "Market" && <MarketOrder />}

            <Button
              className="w-full flex items-center justify-center !mb-4"
              size={"lg"}
            >
              Buy
              <div className="ml-2 bg-white h-6 w-6 rounded-full text-secondary flex items-center justify-center">
                <LucideChevronRight className="h-4 text-current" />
              </div>
            </Button>
          </div>
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  )
}