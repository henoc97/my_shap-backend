import { FeeService } from "../../services/fee.service";
import { FeeDTO } from "../../../presentation/dtos/fee.dto";
import { injectable, inject } from "inversify";
import TYPES from "../../containers/types/types";

@injectable()
export class CreateFeeUseCase {
    constructor(@inject(TYPES.FeeService) private feeService: FeeService) { }

    /**
     * Executes the use case to create a new fee.
     * @param feeDto - The DTO containing fee data.
     * @returns The created fee.
     */
    async execute(feeDto: FeeDTO) {
        return this.feeService.createFee(feeDto);
    }
}
