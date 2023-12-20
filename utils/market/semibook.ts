import { MangroveABI, MangroveReaderABI } from "@/config/abis"
import type {
  Address,
  HttpTransport,
  PublicClient,
  WalletClient,
  WebSocketTransport,
} from "viem"
import { Prettify } from "viem/_types/types/utils"
import { MangroveEventTarget } from "./event-target"
import type { OLKey } from "./lib/olkey"
import { Tick } from "./lib/tick"
import type { BA } from "./market"
import { Offer, type OfferData } from "./offer"
import { DEFAULT_CONFIG, type MangroveLocalConfig } from "./preprocessed"

const ON_CONFIG_UPDATE = "config-update" as const
const ON_OFFER_LIST_UPDATE = "offer-list-update" as const
const ON_INACTIVE = "inactive" as const
const ON_ACTIVE = "active" as const
const ON_DENSITY_UPDATE = "density-update" as const
const ON_KILO_GASBASE_UPDATE = "kilo-gasbase-update" as const
const ON_FEE_UPDATE = "fee-update" as const
const ON_READY = "ready" as const

type EventData = {
  [ON_CONFIG_UPDATE]: MangroveLocalConfig
  [ON_OFFER_LIST_UPDATE]: Offer[]
  [ON_INACTIVE]: void
  [ON_ACTIVE]: void
  [ON_DENSITY_UPDATE]: bigint
  [ON_KILO_GASBASE_UPDATE]: bigint
  [ON_FEE_UPDATE]: bigint
  [ON_READY]: void
}

type MarketEvents = keyof EventData

export class RawSemiBook extends MangroveEventTarget<MarketEvents, EventData> {
  olKey: OLKey

  offers: Map<bigint, Offer>

  config: MangroveLocalConfig

  ba: BA

  private bulkUpdate: boolean = false

  protected unsubs: (() => void)[] = []

  constructor(_olKey: OLKey, ba: BA, _config: MangroveLocalConfig) {
    super()
    this.offers = new Map()
    this.config = _config
    this.olKey = _olKey
    this.ba = ba
  }

  updateConfig(config: MangroveLocalConfig) {
    this.config = config
    this.dispatchEvent(new CustomEvent(ON_CONFIG_UPDATE, { detail: config }))
  }

  updateOffers(offers: OfferData[]) {
    this.bulkUpdate = true
    const results: Offer[] = []
    for (const offer of offers) {
      const o = this.offers.get(offer.offerId)
      if (o) {
        o.update(offer)
        results.push(o)
      } else {
        const newOffer = new Offer(offer)
        this.offers.set(offer.offerId, newOffer)
        const unsub = newOffer.on("change", (_) => {
          if (!this.bulkUpdate) {
            this.dispatchEvent(
              new CustomEvent(ON_OFFER_LIST_UPDATE, { detail: newOffer }),
            )
          }
        })
        this.unsubs.push(unsub)
        results.push(newOffer)
      }
    }
    this.dispatchEvent(
      new CustomEvent(ON_OFFER_LIST_UPDATE, { detail: results }),
    )
    this.bulkUpdate = false
  }

  setInactive() {
    this.updateConfig({ ...this.config, active: false })
    this.dispatchEvent(new CustomEvent(ON_INACTIVE))
  }

  setActive() {
    this.updateConfig({ ...this.config, active: true })
    this.dispatchEvent(new CustomEvent(ON_ACTIVE))
  }

  updateDensity(density: bigint) {
    this.updateConfig({ ...this.config, density })
    this.dispatchEvent(new CustomEvent(ON_DENSITY_UPDATE, { detail: density }))
  }

  updateKiloGasbase(kilo_offer_gasbase: bigint) {
    this.updateConfig({ ...this.config, kilo_offer_gasbase })
    this.dispatchEvent(
      new CustomEvent(ON_KILO_GASBASE_UPDATE, { detail: kilo_offer_gasbase }),
    )
  }

  updateFee(fee: bigint) {
    this.updateConfig({ ...this.config, fee })
    this.dispatchEvent(new CustomEvent(ON_FEE_UPDATE, { detail: fee }))
  }

  addOffers(...offers: OfferData[]) {
    this.updateOffers(offers)
  }

  clear() {
    for (const unsub of this.unsubs) {
      unsub()
    }
    this.offers.clear()
  }

  sorted(): Offer[] {
    // TODO: check is lower tick means better price
    return [...this.offers.values()].sort((a, b) =>
      Number(a.data.tick.value - b.data.tick.value),
    )
  }

  // min tick is best offer
  best(): Offer | undefined {
    let best: Offer | undefined = undefined
    for (const offer of this.offers.values()) {
      if (!offer.data.live) continue
      if (!best) {
        best = offer
        continue
      }
      if (offer.data.tick.value < best.data.tick.value) {
        best = offer
      }
    }
    return best
  }

  worse(): Offer | undefined {
    let worse: Offer | undefined = undefined
    for (const offer of this.offers.values()) {
      if (!offer.data.live) continue
      if (!worse) {
        worse = offer
        continue
      }
      if (offer.data.tick.value > worse.data.tick.value) {
        worse = offer
      }
    }
    return worse
  }
}

type RawParams = {
  olKey: OLKey
  localConfigPromise: Promise<MangroveLocalConfig>
  ba: BA
}

export type ConnectionParams = {
  client: Prettify<PublicClient<HttpTransport> & WalletClient<HttpTransport>>
  publicWebsocketClient?: PublicClient<WebSocketTransport>
  mgvReader: Address
  mgv: Address
  maxOffers: bigint
}

const OFFERS_LIMIT = 100n

export class SemiBook extends RawSemiBook {
  private connection: ConnectionParams

  isFetching: boolean = false

  isListening: boolean = false

  supposedCompleteBook: boolean = false

  private localConfigPromise: Promise<MangroveLocalConfig>

  public get ready(): boolean {
    return !this.isFetching && this.isListening && this.config.active
  }

  constructor(raw: RawParams, connection: ConnectionParams) {
    super(raw.olKey, raw.ba, DEFAULT_CONFIG)
    this.connection = connection
    this.localConfigPromise = raw.localConfigPromise
    this.connection.maxOffers = OFFERS_LIMIT
  }

  public async connect() {
    await Promise.all([
      this.fetchMore(),
      this.localConfigPromise.then((v) => this.updateConfig(v)),
    ])
    this.startListening()
    this.dispatchEvent(new CustomEvent(ON_READY))
  }

  public async fetchMore() {
    if (this.isFetching) return
    this.isFetching = true
    const [currentId, offerIds, offers, details] =
      await this.connection.client.readContract({
        abi: MangroveReaderABI,
        address: this.connection.mgvReader,
        functionName: "offerList",
        args: [
          this.olKey,
          this.worse()?.data.offerId ?? 0n,
          this.connection.maxOffers,
        ],
      })
    const offerData: OfferData[] = []
    for (let i = 0; i < offerIds.length; i++) {
      const offerId = offerIds[i]
      const offer = offers[i]
      const detail = details[i]
      if (!detail || !offer || !offerId) {
        console.warn(
          `Tried to fetch offer ${i} but it was not found in the semibook`,
        )
        continue
      }
      offerData.push({
        offerId,
        live: true,
        gives: offer.gives,
        tick: Tick.wrap(offer.tick),
        maker: detail.maker,
        gasreq: detail.gasreq,
        gasprice: detail.gasprice,
      })
    }
    this.addOffers(...offerData)
    if (currentId === 0n) {
      this.supposedCompleteBook = true
    }
    this.isFetching = false
  }

  public startListening() {
    if (this.isListening) {
      console.warn("Tried to start listening but it was already listening")
      return
    }
    const client =
      this.connection.publicWebsocketClient ?? this.connection.client
    const unwatchWrite = client.watchContractEvent({
      abi: MangroveABI,
      eventName: "OfferWrite",
      address: this.connection.mgv,
      args: { olKeyHash: this.olKey.hash() },
      strict: true,
      onLogs: (logs) => {
        const offerData: OfferData[] = []
        for (const log of logs) {
          const { id, gives, tick, maker, gasreq, gasprice } = log.args
          offerData.push({
            offerId: id,
            live: true,
            gives,
            tick: Tick.wrap(tick),
            maker,
            gasreq,
            gasprice,
          })
        }
        this.updateOffers(offerData)
      },
      onError: (error) => {
        // TODO: handle error
        console.error(error)
      },
    })
    const unwatchRetract = client.watchContractEvent({
      abi: MangroveABI,
      eventName: "OfferRetract",
      address: this.connection.mgv,
      args: { olKeyHash: this.olKey.hash() },
      strict: true,
      onLogs: (logs) => {
        for (const log of logs) {
          const { id } = log.args
          const offer = this.offers.get(id)
          if (offer) {
            offer.retract()
          } else {
            console.warn(
              `Tried to retract offer ${id} but it was not found in the semibook`,
            )
          }
        }
      },
      onError: (error) => {
        console.error(error)
      },
    })
    const unwatchDensityChange = client.watchContractEvent({
      abi: MangroveABI,
      eventName: "SetDensity96X32",
      address: this.connection.mgv,
      args: { olKeyHash: this.olKey.hash() },
      strict: true,
      onLogs: (logs) => {
        for (const log of logs) {
          const { value } = log.args
          this.config.density = value
        }
      },
      onError: (error) => {
        console.error(error)
      },
    })
    this.isListening = true
    this.unsubs.push(unwatchWrite, unwatchRetract, unwatchDensityChange)
  }
}
