import { FeeService } from "../../services/fee.service";

export class DeleteFeeUseCase {
    constructor(private feeService: FeeService) {}

    /**
     * Executes the use case to delete a fee.
     * @param id - The ID of the fee to delete.
     * @returns A boolean indicating if the deletion was successful.
     */
    async execute(id: number) {
        return this.feeService.deleteFee(id);
    }
}