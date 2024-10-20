import { TransactionService } from "../../services/transaction.service";

export class FindTransactionsByUserIdUseCase {
    constructor(private transactionService: TransactionService) {}

    /**
     * Executes the use case to find transactions by user ID.
     * @param userId - The user ID associated with the transactions.
     * @returns A list of transactions associated with the specified user ID.
     */
    async execute(userId: number) {
        return this.transactionService.findTransactionsByUserId(userId);
    }
}