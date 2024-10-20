import { TransferService } from "../../services/transfer.service";

export class GetTransferByIdUseCase {
    constructor(private transferService: TransferService) {}

    /**
     * Executes the use case to retrieve a transfer by ID.
     * @param id - The ID of the transfer.
     * @returns The transfer with the specified ID.
     */
    async execute(id: number) {
        return this.transferService.getTransferById(id);
    }
}