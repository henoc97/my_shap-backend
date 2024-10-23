import { IFeeRepository } from '../../domain/repositories/fee.repository';
import { Fee } from '../../domain/entities/fee.entity';
import prisma from '../../prisma/prisma.service';
import { toFeeEntity } from '../../application/helper/prisma.to.entity/fee.to.entity';
import { injectable } from 'inversify';

@injectable()
export class FeeRepositoryImpl implements IFeeRepository {
  async create(fee: Fee): Promise<Fee> {
    try {
      const { id, transaction, transfer, ...feeData } = fee;
      const result = await prisma.fee.create({ data: feeData });
      return toFeeEntity(result);
    } catch (error) {
      console.error('Error creating fee:', error);
      throw error;
    }
  }

  async getAll(): Promise<Fee[]> {
    try {
      const result = await prisma.fee.findMany();
      return result.map(toFeeEntity);
    } catch (error) {
      console.error('Error getting all fees:', error);
      throw error;
    }
  }

  async getById(id: number): Promise<Fee | null> {
    try {
      const result = await prisma.fee.findUnique({ where: { id } });
      return toFeeEntity(result);
    } catch (error) {
      console.error('Error getting fee by ID:', error);
      throw error;
    }
  }

  async update(id: number, fee: Partial<Fee>): Promise<Fee | null> {
    try {
      const { transaction, transfer, ...feeData } = fee;
      const result = await prisma.fee.update({ where: { id }, data: feeData });
      return toFeeEntity(result);
    } catch (error) {
      console.error('Error updating fee:', error);
      throw error;
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      await prisma.fee.delete({ where: { id } });
      return true;
    } catch (error) {
      console.error('Error deleting fee:', error);
      return false;
    }
  }

  async findByTransactionId(transactionId: number): Promise<Fee | null> {
    try {
      const result = await prisma.fee.findUnique({ where: { id: transactionId } });
      return toFeeEntity(result);
    } catch (error) {
      console.error('Error finding fee by transaction ID:', error);
      throw error;
    }
  }
}
