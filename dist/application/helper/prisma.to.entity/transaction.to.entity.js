"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTransactionEntity = toTransactionEntity;
const transaction_entity_1 = require("../../../domain/entities/transaction.entity");
function toTransactionEntity(dto) {
    return new transaction_entity_1.Transaction(dto.id, dto.amount, dto.userId, dto.type, dto.description);
}
