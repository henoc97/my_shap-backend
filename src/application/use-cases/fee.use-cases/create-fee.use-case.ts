import { FeeService } from "../../services/fee.service";
import { FeeDTO } from "../../../presentation/dtos/fee.dto";

export class CreateFeeUseCase {
    constructor(private feeService: FeeService) {}

    /**
     * Executes the use case to create a new fee.
     * @param feeDto - The DTO containing fee data.
     * @returns The created fee.
     */
    async execute(feeDto: FeeDTO) {
        return this.feeService.createFee(feeDto);
    }   
}
