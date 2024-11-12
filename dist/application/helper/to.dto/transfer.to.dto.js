"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTransferDTO = toTransferDTO;
const transfer_dto_1 = require("../../../presentation/dtos/transfer.dto");
function toTransferDTO(entity) {
    return new transfer_dto_1.TransferDTO(entity.id, entity.amount, entity.senderId, entity.receiverId, entity.createdAt, entity.status, entity.isNonUser);
}
