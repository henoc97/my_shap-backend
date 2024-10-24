import { TransferService } from "../../services/transfer.service";
import { injectable } from "inversify";

@injectable()
export class GetAllTransfersUseCase {
    constructor(private transferService: TransferService) {}

    /**
     * Executes the use case to retrieve all transfers.
     * @returns A list of all transfers.
     */
    async execute() {
        return this.transferService.getAllTransfers();
    }
}
