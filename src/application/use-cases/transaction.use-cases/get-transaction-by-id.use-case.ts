import { TransactionService } from "../../services/transaction.service";
import { injectable } from "inversify";

@injectable()
export class GetTransactionByIdUseCase {
    constructor(private transactionService: TransactionService) {}

    /**
     * Executes the use case to retrieve a transaction by ID.
     * @param id - The ID of the transaction.
     * @returns The transaction with the specified ID.
     */
    async execute(id: number) {
        return this.transactionService.getTransactionById(id);
    }
}