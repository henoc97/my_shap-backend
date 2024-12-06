import { TransactionService } from "../../services/transaction.service";
import { injectable, inject } from "inversify";
import TYPES from "../../containers/types/types";

@injectable()
export class DeleteTransactionUseCase {
    constructor(@inject(TYPES.TransactionService) private transactionService: TransactionService) { }

    /**
     * Executes the use case to delete a transaction.
     * @param id - The ID of the transaction to delete.
     * @returns A boolean indicating if the deletion was successful.
     */
    async execute(id: number) {
        return this.transactionService.deleteTransaction(id);
    }
}