import { User } from "./user.entity";

export class Notification {
  id: number;
  userId: number;
  message: string;
  isRead: boolean = false;
  createdAt: Date = new Date();
  // Relations
  user?: User;

  constructor(
    id: number,
    userId: number,
    message: string,
    isRead: boolean = false,
    user?: User
  ) {
    this.id = id;
    this.userId = userId;
    this.message = message;
    this.user = user;
    this.isRead = isRead;
  }
}
