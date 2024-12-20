import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  transactionID: z.string(),
  transactionTime: z.string(),
  transactionType: z.string(),
  inOrOut: z.string(),
  paymentMethod: z.string(),
  amountCNY: z.string(),
  counterParty: z.string(),
  merchantOrderID: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
