"use client"
import { InfoBar } from "./_components/info-bar"
import { InitialInventory } from "./_components/initial-inventory"

export default function Page() {
  return (
    <main>
      <div className="info-bar">
        <InfoBar />
      </div>
      <div className="inventory border-r">
        <InitialInventory />
      </div>
      <div className="chart"></div>
      <style jsx>{`
        main {
          height: calc(100vh - var(--bar-height));
          display: grid;
          grid-template-columns: 22.375rem 1fr;
          grid-template-rows: auto minmax(0, 1fr);
          grid-template-areas:
            "info-bar info-bar"
            "inventory chart";
        }

        .info-bar {
          grid-area: info-bar;
        }
        .inventory {
          grid-area: inventory;
        }
        .chart {
          grid-area: chart;
        }
      `}</style>
    </main>
  )
}
