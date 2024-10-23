import { Transaction } from "../../../domain/entities/transaction.entity";
import { TransactionDTO } from "../../../presentation/dtos/transaction.dto";


export function toTransactionDTO(entity: Transaction): TransactionDTO {
    return new TransactionDTO(
        entity.id,
        entity.amount,
        entity.userId,
        entity.type,
        entity.createdAt,
        entity.description
    );
}
