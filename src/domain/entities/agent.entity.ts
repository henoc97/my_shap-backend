import { Transfer } from "./transfer.entity";
import { User } from "./user.entity";

export class Agent {
  id: number;
  userId: number;
  createdAt: Date = new Date();
  // Relations
  user?: User;
  transfers: Transfer[] = [];

  constructor(
    id: number,
    userId: number,
    user?: User,
    transfers: Transfer[] = []
  ) {
    this.id = id;
    this.userId = userId;
    this.user = user;
    this.transfers = transfers;
  }
}
