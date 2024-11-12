"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transfer = void 0;
const transfert_status_enum_1 = require("../enums/transfert-status.enum");
class Transfer {
    constructor(id, amount, senderId, receiverId, agentId, feeId, expiresAt, status = transfert_status_enum_1.TransferStatus.PENDING, isNonUser = false, transaction, sender, receiver, agent, fee, code) {
        this.createdAt = new Date();
        this.status = transfert_status_enum_1.TransferStatus.PENDING;
        this.isNonUser = false;
        this.id = id;
        this.amount = amount;
        this.senderId = senderId;
        this.sender = sender;
        this.receiverId = receiverId;
        this.receiver = receiver;
        this.agentId = agentId;
        this.agent = agent;
        this.feeId = feeId;
        this.fee = fee;
        this.code = code;
        this.expiresAt = expiresAt;
        this.status = status;
        this.isNonUser = isNonUser;
        this.transaction = transaction;
    }
}
exports.Transfer = Transfer;
