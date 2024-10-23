import { Transaction } from "../../../domain/entities/transaction.entity";
import { TransactionDTO } from "../../../presentation/dtos/transaction.dto";


export function toTransactionEntity(dto: TransactionDTO): Transaction {
    return new Transaction(
        dto.id,
        dto.amount,
        dto.userId,
        dto.type,
        dto.description,
    );
}
