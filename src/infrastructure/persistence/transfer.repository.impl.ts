import { ITransferRepository } from '../../domain/repositories/transfer.repository';
import { Transfer } from '../../domain/entities/transfer.entity';
import { TransferStatus } from '../../domain/enums/transfert-status.enum';
import prisma from '../../prisma/prisma.service';
import { toTransferEntity } from '../../application/helper/prisma.to.entity/transfer.to.entity';

export class TransferRepositoryImpl implements ITransferRepository {
  async create(transfer: Transfer): Promise<Transfer> {
    try {
        const { id, sender, receiver, agent, fee, transaction, ...transferData } = transfer;
      const result = await prisma.transfer.create({ data: transferData });
      return toTransferEntity(result);
    } catch (error) {
      console.error('Error creating transfer:', error);
      throw error;
    }
  }

  async getAll(): Promise<Transfer[]> {
    try {
      const result = await prisma.transfer.findMany();
      return result.map(toTransferEntity);
    } catch (error) {
      console.error('Error getting all transfers:', error);
      throw error;
    }
  }

  async getById(id: number): Promise<Transfer | null> {
    try {
      const result = await prisma.transfer.findUnique({ where: { id } });
      return toTransferEntity(result);
    } catch (error) {
      console.error('Error getting transfer by ID:', error);
      throw error;
    }
  }

  async update(id: number, transfer: Partial<Transfer>): Promise<Transfer | null> {
    try {
      const { id, sender, receiver, agent, fee, transaction, ...transferData } = transfer;
      const result = await prisma.transfer.update({ where: { id }, data: transferData });
      return toTransferEntity(result);
    } catch (error) {
      console.error('Error updating transfer:', error);
      throw error;
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      await prisma.transfer.delete({ where: { id } });
      return true;
    } catch (error) {
      console.error('Error deleting transfer:', error);
      return false;
    }
  }

  async findBySenderId(senderId: number): Promise<Transfer[]> {
    try {
      const result = await prisma.transfer.findMany({ where: { senderId } });
      return result.map(toTransferEntity);
    } catch (error) {
      console.error('Error finding transfers by sender ID:', error);
      throw error;
    }
  }

  async findByStatus(status: TransferStatus): Promise<Transfer[]> {
    try {
      const result = await prisma.transfer.findMany({ where: { status } });
      return result.map(toTransferEntity);
    } catch (error) {
      console.error('Error finding transfers by status:', error);
      throw error;
    }
  }

  async findByReceiverId(receiverId: number): Promise<Transfer[]> {
    try {
      const result = await prisma.transfer.findMany({ where: { receiverId } });
      return result.map(toTransferEntity);
    } catch (error) {
      console.error('Error finding transfers by receiver ID:', error);
      throw error;
    }
  }
}
