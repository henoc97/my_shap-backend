"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const role_enum_1 = require("../enums/role.enum");
class User {
    constructor(id, name, email, password, balance = 0.0, role = role_enum_1.Role.USER, isActive = true, transfersSent = [], transfersReceived = [], transactions = [], agent, admin, notifications = []) {
        this.balance = 0.0;
        this.role = role_enum_1.Role.USER;
        this.isActive = true;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.id = id;
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
exports.User = User;
