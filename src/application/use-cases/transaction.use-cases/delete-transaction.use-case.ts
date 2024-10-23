import { TransactionService } from "../../services/transaction.service";
import { injectable } from "inversify";

@injectable()
export class DeleteTransactionUseCase {
    constructor(private transactionService: TransactionService) {}

    /**
     * Executes the use case to delete a transaction.
     * @param id - The ID of the transaction to delete.
     * @returns A boolean indicating if the deletion was successful.
     */
    async execute(id: number) {
        return this.transactionService.deleteTransaction(id);
    }
}