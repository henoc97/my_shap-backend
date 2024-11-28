import { Role } from "../enums/role.enum";
import { Transfer } from "./transfer.entity";
import { Transaction } from "./transaction.entity";
import { Agent } from "./agent.entity";
import { Admin } from "./admin.entity";
import { Notification } from "./notification.entity";

export class User {
  id: number;
  email?: string;
  name: string;
  password?: string;
  contact: string;
  countryCode: string = "228";
  balance: number = 0.0;
  role: Role = Role.USER;
  isActive: boolean = true;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  // Relations
  transfersSent: Transfer[];
  transfersReceived: Transfer[];
  transactions: Transaction[];
  agent?: Agent;
  admin?: Admin;
  notifications: Notification[];

  constructor(
    id: number,
    contact: string,
    name: string,
    email?: string,
    password?: string,
    countryCode: string = "228",
    balance: number = 0.0,
    role: Role = Role.USER,
    isActive: boolean = true,
    transfersSent: Transfer[] = [],
    transfersReceived: Transfer[] = [],
    transactions: Transaction[] = [],
    agent?: Agent,
    admin?: Admin,
    notifications: Notification[] = []
  ) {
    this.id = id;
    this.countryCode = countryCode;
    this.contact = contact;
    this.name = name;
    this.email = email;
    this.password = password;
    this.balance = balance;
    this.role = role;
    this.isActive = isActive;
    this.transfersSent = transfersSent;
    this.transfersReceived = transfersReceived;
    this.transactions = transactions;
    this.agent = agent;
    this.admin = admin;
    this.notifications = notifications;
  }
}
