import { Transaction } from "../../../domain/entities/transaction.entity";


export function toTransactionEntity(dto: any): Transaction {
    return new Transaction(
        dto.id,
        dto.amount,
        dto.userId,
        dto.type,
        dto.description,
    );
}
