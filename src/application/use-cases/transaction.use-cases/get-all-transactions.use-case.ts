import { TransactionService } from "../../services/transaction.service";

export class GetAllTransactionsUseCase {
    constructor(private transactionService: TransactionService) {}

    /**
     * Executes the use case to retrieve all transactions.
     * @returns A list of all transactions.
     */
    async execute() {
        return this.transactionService.getAllTransactions();
    }
}
