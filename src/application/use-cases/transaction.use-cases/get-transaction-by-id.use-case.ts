import { TransactionService } from "../../services/transaction.service";
import { injectable, inject } from "inversify";
import TYPES from "../../containers/types/types";

@injectable()
export class GetTransactionByIdUseCase {
    constructor(@inject(TYPES.TransactionService) private transactionService: TransactionService) { }

    /**
     * Executes the use case to retrieve a transaction by ID.
     * @param id - The ID of the transaction.
     * @returns The transaction with the specified ID.
     */
    async execute(id: number) {
        return this.transactionService.getTransactionById(id);
    }
}