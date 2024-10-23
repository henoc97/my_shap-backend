import { TransferStatus } from "../enums/transfert-status.enum";
import { Agent } from "./agent.entity";
import { Fee } from "./fee.entity";
import { Transaction } from "./transaction.entity";
import { User } from "./user.entity";

export class Transfer {
  id: number;
  amount: number;
  senderId: number;
  receiverId?: number;
  agentId?: number;
  feeId?: number;
  code?: string;
  createdAt: Date = new Date();
  expiresAt?: Date;
  status: TransferStatus = TransferStatus.PENDING;
  isNonUser: boolean = false;
  // Relations
  sender?: User;
  receiver?: User;
  agent?: Agent;
  fee?: Fee;
  transaction?: Transaction;

  constructor(
    id: number,
    amount: number,
    senderId: number,
    receiverId?: number,
    agentId?: number,
    feeId?: number,
    expiresAt?: Date,
    status: TransferStatus = TransferStatus.PENDING,
    isNonUser: boolean = false,
    transaction?: Transaction,
    sender?: User,
    receiver?: User,
    agent?: Agent,
    fee?: Fee,
    code?: string,
  ) {
    this.id = id;
    this.amount = amount;
    this.senderId = senderId;
    this.sender = sender;
    this.receiverId = receiverId;
    this.receiver = receiver;
    this.agentId = agentId;
    this.agent = agent;
    this.feeId = feeId;
    this.fee = fee;
    this.code = code;
    this.expiresAt = expiresAt;
    this.status = status;
    this.isNonUser = isNonUser;
    this.transaction = transaction;
  }
}
