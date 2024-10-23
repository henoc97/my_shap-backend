import { TransactionService } from "../../services/transaction.service";
import { Transaction } from "../../../domain/entities/transaction.entity";
import { injectable } from "inversify";

@injectable()
export class UpdateTransactionUseCase {
    constructor(private transactionService: TransactionService) {}

    /**
     * Executes the use case to update a transaction.
     * @param id - The ID of the transaction to update.
     * @param transaction - The partial transaction data to update.
     * @returns The updated transaction.
     */
    async execute(id: number, transaction: Partial<Transaction>) {
        return this.transactionService.updateTransaction(id, transaction);
    }
}
