import { z } from "zod"

const orderSchema = z.object({
  creationDate: z.date(),
  latestUpdateDate: z.date(),
  expiryDate: z.date().optional(),
  transactionHash: z.string(),
  isBid: z.boolean(),
  takerGot: z.string(),
  takerGave: z.string(),
  penalty: z.string(),
  feePaid: z.string(),
  initialWants: z.string(),
  initialGives: z.string(),
  price: z.string(),
  offerId: z.string(),
})
export type Order = z.infer<typeof orderSchema>

export function parseOrders(data: unknown[]): Order[] {
  return data
    .map((item) => {
      try {
        return orderSchema.parse(item)
      } catch (error) {
        console.error("Invalid format for offers: ", item, error)
        return null
      }
    })
    .filter(Boolean) as Order[]
}

const amplifiedOrderSchema = z.object({
  id: z.string(),
  owner: z.object({
    address: z.string(),
  }).transform((data) => data.address),


  creationDate: z.date(),
  latestUpdateDate: z.date(),
  expiryDate: z.date().optional(),
  transactionHash: z.string(),
  isBid: z.boolean(),
  takerGot: z.string(),
  takerGave: z.string(),
  penalty: z.string(),
  feePaid: z.string(),
  initialWants: z.string(),
  initialGives: z.string(),
  price: z.string(),
  offerId: z.string(),
})
export type AmplifiedOrder = z.infer<typeof amplifiedOrderSchema>

export function parseAmplifiedOrders(data: unknown[]): AmplifiedOrder[] {
  return data
    .map((item) => {
      try {
        return amplifiedOrderSchema.parse(item)
      } catch (error) {
        console.error("Invalid format for offers: ", item, error)
        return null
      }
    })
    .filter(Boolean) as AmplifiedOrder[]
}
