import { User } from "./user.entity";

export class Admin {
  id: number;
  userId: number;
  createdAt: Date = new Date();
  // Relations
  user?: User;

  constructor(id: number, userId: number, user?: User) {
    this.id = id;
    this.userId = userId;
    this.user = user;
  }
}
