import { TransactionService } from "../../services/transaction.service";
import { TransactionType } from "../../../domain/enums/transaction-type.enum";
import { injectable } from "inversify";

@injectable()
export class FindTransactionsByTypeUseCase {
    constructor(private transactionService: TransactionService) {}

    /**
     * Executes the use case to find transactions by type.
     * @param type - The type of the transactions to find.
     * @returns A list of transactions with the specified type.
     */
    async execute(type: TransactionType) {
        return this.transactionService.findTransactionsByType(type);
    }
}