import { Transaction } from "../../domain/entities/transaction.entity";
import { TransactionType } from "../../domain/enums/transaction-type.enum";
import { ITransactionRepository } from "../../domain/repositories/transaction.repository";


export class TransactionService {
    constructor(private transactionRepository: ITransactionRepository) {}

    async createTransaction(transaction: Transaction): Promise<Transaction> {
        return this.transactionRepository.create(transaction);
    }

    async getAllTransactions(): Promise<Transaction[]> {
        return this.transactionRepository.getAll();
    }

    async getTransactionById(id: number): Promise<Transaction | null> {
        return this.transactionRepository.getById(id);
    }

    async updateTransaction(id: number, transaction: Partial<Transaction>): Promise<Transaction | null> {
        return this.transactionRepository.update(id, transaction);
    }

    async deleteTransaction(id: number): Promise<boolean> {
        return this.transactionRepository.delete(id);
    }

    async findTransactionsByUserId(userId: number): Promise<Transaction[]> {
        return this.transactionRepository.findByUserId(userId);
    }

    async findTransactionsByType(type: TransactionType): Promise<Transaction[]> {
        return this.transactionRepository.findByType(type);
    }
}