"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    constructor(id, amount, userId, type, description, user, transfer, fee) {
        this.createdAt = new Date();
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
exports.Transaction = Transaction;
