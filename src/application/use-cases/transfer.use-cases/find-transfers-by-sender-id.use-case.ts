import TYPES from "../../containers/types/types";
import { TransferService } from "../../services/transfer.service";
import { inject, injectable } from "inversify";

@injectable()
export class FindTransfersBySenderIdUseCase {
    constructor(@inject(TYPES.TransferService) private transferService: TransferService) { }

    /**
     * Executes the use case to find transfers by sender ID.
     * @param senderId - The sender ID associated with the transfers.
     * @returns A list of transfers associated with the specified sender ID.
     */
    async execute(senderId: number) {
        return this.transferService.findTransfersBySenderId(senderId);
    }
}