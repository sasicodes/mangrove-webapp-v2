"use client"
import React from "react"

import {
  CustomTabs,
  CustomTabsContent,
  CustomTabsList,
  CustomTabsTrigger,
} from "@/components/stateless/custom-tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Table, TableBody, TableHeader, TableRow } from "@/components/ui/table"
import useMarket from "@/providers/market"
import { cn } from "@/utils"
import { SemiBook } from "./semibook"
import { OrderBookTableHead } from "./table-head"
import useScrollToMiddle from "./use-scroll-to-middle"

export default function Book({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties | undefined
}) {
  const { requestBookQuery, selectedMarket } = useMarket()
  const { bodyRef, scrollAreaRef, bestAskRef, bestBidRef } = useScrollToMiddle()

  return (
    <CustomTabs
      style={style}
      defaultValue={"book"}
      className={cn("h-full", className)}
    >
      <CustomTabsList className="w-full flex justify-start border-b">
        <CustomTabsTrigger value={"book"}>Book</CustomTabsTrigger>
      </CustomTabsList>
      <CustomTabsContent value="book">
        <div className="px-1 relative h-full">
          <ScrollArea
            className="h-full"
            scrollHideDelay={200}
            ref={scrollAreaRef}
          >
            <Table className="text-sm leading-5 h-full select-none">
              <TableHeader className="sticky top-[0] bg-background z-40 p-0 text-xs">
                <TableRow className="border-none">
                  <OrderBookTableHead className="text-left">
                    Size ({selectedMarket?.base.name})
                  </OrderBookTableHead>
                  <OrderBookTableHead>
                    Price ({selectedMarket?.quote.name})
                  </OrderBookTableHead>
                  <OrderBookTableHead>Total</OrderBookTableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="overflow-scroll" ref={bodyRef}>
                <SemiBook
                  type="asks"
                  ref={bestAskRef}
                  data={requestBookQuery.data}
                />
                <SemiBook
                  type="bids"
                  ref={bestBidRef}
                  data={requestBookQuery.data}
                />
              </TableBody>
            </Table>
            <ScrollBar orientation="vertical" className="z-50" />
          </ScrollArea>
        </div>
      </CustomTabsContent>
    </CustomTabs>
  )
}