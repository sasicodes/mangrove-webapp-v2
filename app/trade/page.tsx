"use client"
import MarketSelector from "@/app/trade/_components/market-selector/market-selector"
import { Market } from "./_components/charts/charts"
import { Market as MarketTest } from "@/utils/market/market"
import { Forms } from "./_components/forms/forms"
import { OrderBook } from "./_components/orderbook/orderbook"
import { PricesBar } from "./_components/prices-bar/prices-bar"
import { Tables } from "./_components/tables/tables"
import useMangrove from "@/providers/mangrove"
import { useEffect } from "react"
import { ConfigCache } from "@/utils/market/config"
import { Address, usePublicClient } from "wagmi"
import { getTokenWithSymbol } from "@/config/tokens"
import { OLKey } from "@/utils/market/lib/olkey"

export default function Page() {

  // const { mangrove } = useMangrove()
  // const publicClient = usePublicClient()
  // useEffect(() => {
  //   if (mangrove) {
  //     const config = new ConfigCache({
  //       publicClient: publicClient as any,
  //       mangroveReader: mangrove.readerContract.address as Address,
  //     })
  //     const market = new MarketTest({
  //       configCache: config,
  //       asksOlKey: new OLKey({
  //         inbound_tkn: getTokenWithSymbol(80001, "WETH").address,
  //         outbound_tkn: getTokenWithSymbol(80001, "USDT").address,
  //         tickSpacing: 1n,
  //       }),
  //     }, {
  //       publicClient: publicClient as any,
  //       mgv: mangrove.address as Address,
  //       mgvReader: mangrove.readerContract.address as Address,
  //       maxOffers: 50n,
  //     })
  //     market.on("offer-change", console.log)
  //   }
  // }, [mangrove])

  return (
    <main>
      <section className="trade-section">
        <div className="px-4 border-b h-[var(--bar-height)] flex items-center relative">
          <MarketSelector />
        </div>
        <Forms />
      </section>

      <section className="border-x book-and-chart">
        <OrderBook
          className="overflow-hidden border-r book-container"
          style={{ gridArea: "book" }}
        />
        <div
          className="market-chart-container"
          style={{
            gridArea: "chart",
          }}
        >
          <PricesBar />
          <Market className="w-full border-t h-full" />
        </div>
      </section>

      <section className="border-x border-t tables-section z-50 bg-background">
        <Tables />
      </section>

      <style jsx global>{`
        body {
          display: grid;
          grid-template:
            "header" var(--bar-height)
            "main" minmax(0, 1fr);
          overflow: hidden;
        }
      `}</style>

      <style jsx>{`
        main {
          display: grid;
          grid-area: main;
          grid-template-columns: 20.5rem minmax(0, 1fr);
          grid-template-rows: 1fr var(--history-table-height);
          grid-template-areas:
            "trade content"
            "trade tables";
        }

        .tables-section {
          grid-area: tables;
        }

        .trade-section {
          grid-area: trade;
        }

        .book-and-chart {
          display: grid;
          grid-area: content;
          grid-template-areas: "book chart";
          grid-template-columns: 20.5rem minmax(0, 1fr);
          grid-template-rows: var(--book-chart-height);
        }
      `}</style>
      <style global jsx>{`
        .market-chart-container div[role="tabpanel"] {
          height: calc(100% - var(--bar-height) * 2);
        }
        .book-container div[role="tabpanel"] {
          height: calc(100% - var(--bar-height));
        }
      `}</style>
    </main>
  )
}
