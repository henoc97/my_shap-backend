"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fee = void 0;
class Fee {
    constructor(id, amount, description, transaction, transfer) {
        this.id = id;
        this.amount = amount;
        this.description = description;
        this.transaction = transaction;
        this.transfer = transfer;
    }
}
exports.Fee = Fee;
