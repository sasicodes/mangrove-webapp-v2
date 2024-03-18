import { z } from "zod"

const myStrategiesSchema = z.object({
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
export type MyStrategies = z.infer<typeof myStrategiesSchema>