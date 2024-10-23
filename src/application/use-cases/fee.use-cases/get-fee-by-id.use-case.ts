import { FeeService } from "../../services/fee.service";
import { injectable } from "inversify";

@injectable()
export class GetFeeByIdUseCase {
    constructor(private feeService: FeeService) {}

    /**
     * Executes the use case to retrieve a fee by ID.
     * @param id - The ID of the fee.
     * @returns The fee with the specified ID.
     */
    async execute(id: number) {
        return this.feeService.getFeeById(id);
    }
}