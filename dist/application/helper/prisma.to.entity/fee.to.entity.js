"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFeeEntity = toFeeEntity;
function toFeeEntity(prismaFee) {
    return {
        id: prismaFee.id,
        amount: prismaFee.amount,
        description: prismaFee.description,
        transaction: prismaFee.transaction,
        transfer: prismaFee.transfer,
    };
}
