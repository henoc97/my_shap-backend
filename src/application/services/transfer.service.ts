import { Transfer } from "../../domain/entities/transfer.entity";
import { TransferStatus } from "../../domain/enums/transfert-status.enum";
import { ITransferRepository } from "../../domain/repositories/transfer.repository";


export class TransferService {
    constructor(private transferRepository: ITransferRepository) {}

    async createTransfer(transfer: Transfer): Promise<Transfer> {
        return this.transferRepository.create(transfer);
    }

    async getAllTransfers(): Promise<Transfer[]> {
        return this.transferRepository.readAll();
    }

    async getTransferById(id: number): Promise<Transfer | null> {
        return this.transferRepository.readById(id);
    }

    async updateTransfer(id: number, transfer: Partial<Transfer>): Promise<Transfer | null> {
        return this.transferRepository.update(id, transfer);
    }

    async deleteTransfer(id: number): Promise<boolean> {
        return this.transferRepository.delete(id);
    }

    async findTransfersBySenderId(senderId: number): Promise<Transfer[]> {
        return this.transferRepository.findBySenderId(senderId);
    }

    async findTransfersByStatus(status: TransferStatus): Promise<Transfer[]> {
        return this.transferRepository.findByStatus(status);
    }

    async findTransfersByReceiverId(receiverId: number): Promise<Transfer[]> {
        return this.transferRepository.findByReceiverId(receiverId);
    }
}