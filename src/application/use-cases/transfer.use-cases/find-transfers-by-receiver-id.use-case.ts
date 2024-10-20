import { TransferService } from "../../services/transfer.service";

export class FindTransfersByReceiverIdUseCase {
    constructor(private transferService: TransferService) {}

    /**
     * Executes the use case to find transfers by receiver ID.
     * @param receiverId - The receiver ID associated with the transfers.
     * @returns A list of transfers associated with the specified receiver ID.
     */
    async execute(receiverId: number) {
        return this.transferService.findTransfersByReceiverId(receiverId);
    }
}