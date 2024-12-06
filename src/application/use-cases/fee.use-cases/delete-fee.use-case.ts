import { FeeService } from "../../services/fee.service";
import { injectable, inject } from "inversify";
import TYPES from "../../containers/types/types";

@injectable()
export class DeleteFeeUseCase {
    constructor(@inject(TYPES.FeeService) private feeService: FeeService) { }

    /**
     * Executes the use case to delete a fee.
     * @param id - The ID of the fee to delete.
     * @returns A boolean indicating if the deletion was successful.
     */
    async execute(id: number) {
        return this.feeService.deleteFee(id);
    }
}