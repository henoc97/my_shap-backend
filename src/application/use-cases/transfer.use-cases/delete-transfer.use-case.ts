import TYPES from "../../containers/types/types";
import { TransferService } from "../../services/transfer.service";
import { inject, injectable } from "inversify";

@injectable()
export class DeleteTransferUseCase {
    constructor(@inject(TYPES.TransferService) private transferService: TransferService) { }

    /**
     * Executes the use case to delete a transfer.
     * @param id - The ID of the transfer to delete.
     * @returns A boolean indicating if the deletion was successful.
     */
    async execute(id: number) {
        return this.transferService.deleteTransfer(id);
    }
}