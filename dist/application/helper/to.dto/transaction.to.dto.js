"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTransactionDTO = toTransactionDTO;
const transaction_dto_1 = require("../../../presentation/dtos/transaction.dto");
function toTransactionDTO(entity) {
    return new transaction_dto_1.TransactionDTO(entity.id, entity.amount, entity.userId, entity.type, entity.createdAt, entity.description);
}
