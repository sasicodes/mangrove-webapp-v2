import { MangroveReaderABI } from "@/config/abis"
import type { ContractFunctionResult } from "viem"

import { Prettify } from "viem/_types/types/utils"
import { MangroveEventTarget } from "./event-target"
import type { Tick } from "./lib/tick"

export type OfferInfo = ContractFunctionResult<
  typeof MangroveReaderABI,
  "offerInfo"
>[0]
export type OfferDetail = ContractFunctionResult<
  typeof MangroveReaderABI,
  "offerInfo"
>[1]

export type OfferData = Prettify<
  {
    live: boolean
    offerId: bigint
  } & Omit<OfferInfo, "prev" | "next" | "tick"> &
  Omit<OfferDetail, "kilo_offer_gasbase">
  & { tick: Tick }
>

const ON_UPDATE = "change" as const
const ON_RETRACT = "retract" as const

type OfferEvents = typeof ON_UPDATE | typeof ON_RETRACT

type EventData = {
  [ON_UPDATE]: OfferData
  [ON_RETRACT]: void
}

export class Offer extends MangroveEventTarget<OfferEvents, EventData> {
  data: OfferData

  constructor(data: OfferData) {
    super()
    this.data = data
  }

  update(data: OfferData) {
    this.data = data
    this.dispatchEvent(new CustomEvent(ON_UPDATE, { detail: data }))
  }

  retract() {
    this.update({ ...this.data, live: false })
    this.dispatchEvent(new CustomEvent(ON_RETRACT))
  }

  on<TType extends OfferEvents>(
    type: TType,
    callback: (data: EventData[TType]) => void,
    options?: boolean | AddEventListenerOptions | undefined,
  ): () => void {
    const listener = (evt: Event) => {
      if (evt instanceof CustomEvent && evt.type === type) {
        callback(evt.detail)
      }
    }
    this.addEventListener(type, listener, options)
    return () => this.removeEventListener(type, listener, options)
  }
}
