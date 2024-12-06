import { TransactionService } from "../../services/transaction.service";
import { injectable, inject } from "inversify";
import TYPES from "../../containers/types/types";

@injectable()
export class GetAllTransactionsUseCase {
    constructor(@inject(TYPES.TransactionService) private transactionService: TransactionService) { }

    /**
     * Executes the use case to retrieve all transactions.
     * @returns A list of all transactions.
     */
    async execute() {
        return this.transactionService.getAllTransactions();
    }
}
