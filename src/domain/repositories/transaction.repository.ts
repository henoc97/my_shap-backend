import { Transaction } from "../entities/transaction.entity";
import { TransactionType } from "../enums/transaction-type.enum";

export interface ITransactionRepository {
    create(transaction: Transaction): Promise<Transaction>;
    getAll(): Promise<Transaction[]>;
    getById(id: number): Promise<Transaction | null>;
    update(id: number, transaction: Partial<Transaction>): Promise<Transaction | null>;
    delete(id: number): Promise<boolean>;
    findByUserId(userId: number): Promise<Transaction[]>;
    findByType(type: TransactionType): Promise<Transaction[]>;
}
