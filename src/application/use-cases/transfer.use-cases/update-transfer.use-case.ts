import { TransferService } from "../../services/transfer.service";
import { Transfer } from "../../../domain/entities/transfer.entity";
import { injectable } from "inversify";

@injectable()
export class UpdateTransferUseCase {
    constructor(private transferService: TransferService) {}

    /**
     * Executes the use case to update a transfer.
     * @param id - The ID of the transfer to update.
     * @param transfer - The partial transfer data to update.
     * @returns The updated transfer.
     */
    async execute(id: number, transfer: Partial<Transfer>) {
        return this.transferService.updateTransfer(id, transfer);
    }
}