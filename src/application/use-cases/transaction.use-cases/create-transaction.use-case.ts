import { TransactionDTO } from "../../../presentation/dtos/transaction.dto";
import { toTransactionEntity } from "../../helper/to.entity/transaction.to.entity";
import { TransactionService } from "../../services/transaction.service";
import { injectable, inject } from "inversify";
import TYPES from "../../containers/types/types";

@injectable()
export class CreateTransactionUseCase {
    constructor(@inject(TYPES.TransactionService) private transactionService: TransactionService) { }

    /**
     * Executes the use case to create a new transaction.
     * @param transactionDto - The DTO containing transaction data.
     * @returns The created transaction.
     */
    async execute(transactionDto: TransactionDTO) {
        const transaction = toTransactionEntity(transactionDto);
        return this.transactionService.createTransaction(transaction);
    }
}
