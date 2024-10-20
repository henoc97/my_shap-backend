import { TransferService } from "../../services/transfer.service";

export class DeleteTransferUseCase {
    constructor(private transferService: TransferService) {}

    /**
     * Executes the use case to delete a transfer.
     * @param id - The ID of the transfer to delete.
     * @returns A boolean indicating if the deletion was successful.
     */
    async execute(id: number) {
        return this.transferService.deleteTransfer(id);
    }
}