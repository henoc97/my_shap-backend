import { Fee } from "../../../domain/entities/fee.entity";

export function toFeeEntity(prismaFee: any): Fee {
    return {
        id: prismaFee.id,
        amount: prismaFee.amount,
        description: prismaFee.description,
        transaction: prismaFee.transaction,
        transfer: prismaFee.transfer,
    };
}

