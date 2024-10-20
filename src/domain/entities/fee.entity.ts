import { Transfer } from "./transfer.entity";
import { Transaction } from "./transaction.entity";

export class Fee {
  id: number;
  amount: number;
  description: string;
  // Relations
  transaction?: Transaction;
  transfer?: Transfer;

  constructor(
    id: number,
    amount: number,
    description: string,
    transaction?: Transaction,
    transfer?: Transfer
  ) {
    this.id = id;
    this.amount = amount;
    this.description = description;
    this.transaction = transaction;
    this.transfer = transfer;
  }
}
