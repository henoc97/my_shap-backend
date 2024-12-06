import { TransactionService } from "../../services/transaction.service";
import { injectable, inject } from "inversify";
import TYPES from "../../containers/types/types";

@injectable()
export class FindTransactionsByUserIdUseCase {
    constructor(@inject(TYPES.TransactionService) private transactionService: TransactionService) { }

    /**
     * Executes the use case to find transactions by user ID.
     * @param userId - The user ID associated with the transactions.
     * @returns A list of transactions associated with the specified user ID.
     */
    async execute(userId: number) {
        return this.transactionService.findTransactionsByUserId(userId);
    }
}