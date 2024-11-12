"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTransferEntity = toTransferEntity;
const transfer_entity_1 = require("../../../domain/entities/transfer.entity");
function toTransferEntity(dto) {
    return new transfer_entity_1.Transfer(dto.id, dto.amount, dto.senderId, dto.receiverId, dto.agentId, dto.feeId, dto.expiresAt, dto.status, dto.isNonUser);
}
