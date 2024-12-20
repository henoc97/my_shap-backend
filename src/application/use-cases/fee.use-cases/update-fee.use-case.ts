import { FeeService } from "../../services/fee.service";
import { Fee } from "../../../domain/entities/fee.entity";
import { injectable, inject } from "inversify";
import TYPES from "../../containers/types/types";

@injectable()
export class UpdateFeeUseCase {
    constructor(@inject(TYPES.FeeService) private feeService: FeeService) { }

    /**
     * Executes the use case to update a fee.
     * @param id - The ID of the fee to update.
     * @param fee - The partial fee data to update.
     * @returns The updated fee.
     */
    async execute(id: number, fee: Partial<Fee>) {
        return this.feeService.updateFee(id, fee);
    }
}