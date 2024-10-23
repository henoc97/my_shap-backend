import { TransactionType } from "../enums/transaction-type.enum";
import { Fee } from "./fee.entity";
import { Transfer } from "./transfer.entity";
import { User } from "./user.entity";

export class Transaction {
  id: number;
  amount: number;
  userId: number;
  type: TransactionType;
  createdAt: Date = new Date();
  description: string;
  // Relations
  user?: User;
  transfer?: Transfer;
  fee?: Fee;

  constructor(
    id: number,
    amount: number,
    userId: number,
    type: TransactionType,
    description: string,
    user?: User,
    transfer?: Transfer,
    fee?: Fee
  ) {
    this.id = id;
    this.amount = amount;
    this.userId = userId;
    this.type = type;
    this.description = description;
    this.user = user;
    this.transfer = transfer;
    this.fee = fee;
  }
}
