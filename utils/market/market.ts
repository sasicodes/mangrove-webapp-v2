import { MangroveEventTarget } from "./event-target";
import { SemiBook, type ConnectionParams } from "./semibook";
import { OLKey } from "./lib/olkey";
import { ConfigCache } from "./config";

const ON_OFFER_LIST_UPDATE = 'offer-change' as const;
const ON_CONFIG_UPDATE = 'config-change' as const;
const ON_READY = 'ready' as const;

export type BA = "bids" | "asks";

type EventData = {
  [ON_OFFER_LIST_UPDATE]: SemiBook;
  [ON_CONFIG_UPDATE]: SemiBook;
  [ON_READY]: void;
};

type MarketEvents = keyof EventData;

type MarketBaseConfig = {
  // base as outbound and quote as inbound
  asksOlKey: OLKey;
  configCache: ConfigCache;
}

export class Market extends MangroveEventTarget<MarketEvents, EventData>  {
  bids: SemiBook;
  asks: SemiBook;

  public get ready(): boolean {
    return this.bids.ready && this.asks.ready;
  }

  private unsubs: (() => void)[] = [];

  constructor(config: MarketBaseConfig, connection: ConnectionParams) {
    super();
    const asksOlKey = config.asksOlKey;
    const bidsOlKey = asksOlKey.fliped();

    // init multicall to get config
    const multicallPromise = config.configCache.getConfigFor(asksOlKey);

    this.bids = new SemiBook({
      olKey: bidsOlKey,
      ba: "bids",
      localConfigPromise: multicallPromise.then(res => res.bids),
    }, connection);

    this.bids.connect();

    this.asks = new SemiBook({
      olKey: asksOlKey,
      ba: "asks",
      localConfigPromise: multicallPromise.then(res => res.asks),
    }, connection);

    this.asks.connect();

    this.unsubs = [
      this.bids.on("offer-list-update", () => this.dispatchEvent(new CustomEvent(ON_OFFER_LIST_UPDATE, { detail: this.bids }))),
      this.asks.on("offer-list-update", () => this.dispatchEvent(new CustomEvent(ON_OFFER_LIST_UPDATE, { detail: this.asks }))),
      this.bids.on("config-update", () => this.dispatchEvent(new CustomEvent(ON_CONFIG_UPDATE, { detail: this.bids }))),
      this.asks.on("config-update", () => this.dispatchEvent(new CustomEvent(ON_CONFIG_UPDATE, { detail: this.asks }))),
      this.asks.on("ready", () => {
        if (this.bids.ready) {
          this.dispatchEvent(new CustomEvent(ON_READY));
        }
      }, { once: true }),
      this.bids.on("ready", () => {
        if (this.asks.ready) {
          this.dispatchEvent(new CustomEvent(ON_READY));
        }
      }, { once: true }),
    ]
  }

  clear() {
    for (const unsub of this.unsubs) {
      unsub();
    }
    this.asks.clear();
    this.bids.clear();
  }
}