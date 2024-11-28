import TYPES from "../../containers/types/types";
import { TransferService } from "../../services/transfer.service";
import { inject, injectable } from "inversify";

@injectable()
export class GetTransferByIdUseCase {
    constructor(@inject(TYPES.TransferService) private transferService: TransferService) { }

    /**
     * Executes the use case to retrieve a transfer by ID.
     * @param id - The ID of the transfer.
     * @returns The transfer with the specified ID.
     */
    async execute(id: number) {
        return this.transferService.getTransferById(id);
    }
}