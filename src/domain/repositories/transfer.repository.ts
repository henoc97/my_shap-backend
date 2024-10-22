import { Transfer } from "../entities/transfer.entity";
import { TransferStatus } from "../enums/transfert-status.enum";

export interface ITransferRepository {
    create(transfer: Transfer): Promise<Transfer>;
    getAll(): Promise<Transfer[]>;
    getById(id: number): Promise<Transfer | null>;
    update(id: number, transfer: Partial<Transfer>): Promise<Transfer | null>;
    delete(id: number): Promise<boolean>;
    findBySenderId(senderId: number): Promise<Transfer[]>;
    findByStatus(status: TransferStatus): Promise<Transfer[]>;
    findByReceiverId(receiverId: number): Promise<Transfer[]>;
}
