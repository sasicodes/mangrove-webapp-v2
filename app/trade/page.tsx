"use client"
import MarketSelector from "@/app/trade/_components/market-selector/market-selector"
import { Market } from "./_components/charts/charts"
import { Forms } from "./_components/forms/forms"
import { OrderBook } from "./_components/orderbook/orderbook"
import { PricesBar } from "./_components/prices-bar/prices-bar"
import { Tables } from "./_components/tables/tables"

export default function Page() {
  return (
    <main>
      <section className="trade-section">
        <div className="px-4 border-b h-[var(--bar-height)] flex items-center relative">
          <MarketSelector />
        </div>
        <Forms />
      </section>

      <section className="border-x book-and-chart w-full overflow-hidden md:w-auto">
        <OrderBook
          className="overflow-hidden border-r book-container w-full md:w-auto md:overflow-auto max-h-[30rem] md:max-h-none"
          style={{ gridArea: "book" }}
        />
        <div
          className="market-chart-container w-full overflow-hidden md:w-auto h-[30rem] md:h-auto"
          style={{
            gridArea: "chart",
          }}
        >
          <PricesBar />
          <Market className="w-full border-t h-full" />
        </div>
      </section>

      <section className="border-x border-t tables-section z-50 bg-background w-full overflow-hidden md:w-auto">
        <Tables />
      </section>

      <style jsx global>{`
        body {
          display: grid;
          grid-template-rows: var(--bar-height) auto;
          grid-template-areas:
            "header"
            "main";
          width: 100vw;
        }

        @media (min-width: 768px) {
          body {
            height: 100vh;
          }
        }
      `}</style>

      <style jsx>{`
        main {
          display: grid;
          grid-area: main;
          grid-template-columns: 1fr;
          grid-template-rows: auto auto auto auto;
          grid-template-areas:
            "trade"
            "content"
            "tables";
          max-width: 100vw;
          overflow-x: auto;
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
          grid-template-areas: "book" "chart";
          grid-template-columns: 1fr;
          grid-template-rows: auto auto;
        }

        @media (min-width: 768px) {
          main {
            grid-template-columns: 20.5rem minmax(0, 1fr);
            grid-template-rows: 1fr var(--history-table-height);
            grid-template-areas:
              "trade content"
              "trade tables";
          }

          .book-and-chart {
            grid-template-areas: "book chart";
            grid-template-columns: 20.5rem minmax(0, 1fr);
            grid-template-rows: var(--book-chart-height);
          }

          .book-container {
            max-width: 100vw;
            overflow-x: hidden;
          }
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
