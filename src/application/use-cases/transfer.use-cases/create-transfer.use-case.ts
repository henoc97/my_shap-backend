import { TransferDTO } from "../../../presentation/dtos/transfer.dto";
import { toTransferEntity } from "../../helper/to.entity/transfer.to.entity";
import { TransferService } from "../../services/transfer.service";
import { injectable } from "inversify";

@injectable()
export class CreateTransferUseCase {
    constructor(private transferService: TransferService) {}

    /**
     * Executes the use case to create a new transfer.
     * @param transferDto - The DTO containing transfer data.
     * @returns The created transfer.
     */
    async execute(transferDto: TransferDTO) {
        const transfer = toTransferEntity(transferDto);
        return this.transferService.createTransfer(transfer);
    }
}
