import { TransactionService } from "../../services/transaction.service";
import { Transaction } from "../../../domain/entities/transaction.entity";
import { injectable, inject } from "inversify";
import TYPES from "../../containers/types/types";

@injectable()
export class UpdateTransactionUseCase {
    constructor(@inject(TYPES.TransactionService) private transactionService: TransactionService) { }

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
