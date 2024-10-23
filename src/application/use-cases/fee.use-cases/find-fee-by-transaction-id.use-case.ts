import { FeeService } from "../../services/fee.service";
import { injectable } from "inversify";

@injectable()
export class FindFeeByTransactionIdUseCase {
    constructor(private feeService: FeeService) {}

    /**
     * Executes the use case to find a fee by transaction ID.
     * @param transactionId - The transaction ID associated with the fee.
     * @returns The fee associated with the specified transaction ID.
     */
    async execute(transactionId: number) {
        return this.feeService.findFeeByTransactionId(transactionId);
    }
}