import { TransferService } from "../../services/transfer.service";
import { TransferStatus } from "../../../domain/enums/transfert-status.enum";

export class FindTransfersByStatusUseCase {
    constructor(private transferService: TransferService) {}

    /**
     * Executes the use case to find transfers by status.
     * @param status - The status of the transfers to find.
     * @returns A list of transfers with the specified status.
     */
    async execute(status: TransferStatus) {
        return this.transferService.findTransfersByStatus(status);
    }
}