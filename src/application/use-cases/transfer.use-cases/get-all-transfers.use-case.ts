import TYPES from "../../containers/types/types";
import { TransferService } from "../../services/transfer.service";
import { inject, injectable } from "inversify";

@injectable()
export class GetAllTransfersUseCase {
    constructor(@inject(TYPES.TransferService) private transferService: TransferService) { }

    /**
     * Executes the use case to retrieve all transfers.
     * @returns A list of all transfers.
     */
    async execute() {
        return this.transferService.getAllTransfers();
    }
}
