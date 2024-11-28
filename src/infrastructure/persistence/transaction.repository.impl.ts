import { ITransactionRepository } from '../../domain/repositories/transaction.repository';
import { Transaction } from '../../domain/entities/transaction.entity';
import { TransactionType } from '../../domain/enums/transaction-type.enum';
import prisma from '../../../prisma/prisma.service';
import { toTransactionEntity } from '../../application/helper/prisma.to.entity/transaction.to.entity';
import { injectable } from 'inversify';

@injectable()
export class TransactionRepositoryImpl implements ITransactionRepository {
  getAll(): Promise<Transaction[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Promise<Transaction | null> {
    throw new Error('Method not implemented.');
  }
  async create(transaction: Transaction): Promise<Transaction> {
    try {
      const { id, user, transfer, fee, ...transactionData } = transaction;
      const result = await prisma.transaction.create({ data: transactionData });
      return toTransactionEntity(result);
    } catch (error) {
      console.error('Error creating transaction:', error);
      throw error;
    }
  }

  async readAll(): Promise<Transaction[]> {
    try {
      const result = await prisma.transaction.findMany();
      return result.map(toTransactionEntity);
    } catch (error) {
      console.error('Error reading all transactions:', error);
      throw error;
    }
  }

  async readById(id: number): Promise<Transaction | null> {
    try {
      const result = await prisma.transaction.findUnique({ where: { id } });
      return toTransactionEntity(result);
    } catch (error) {
      console.error('Error reading transaction by ID:', error);
      throw error;
    }
  }

  async update(id: number, transaction: Partial<Transaction>): Promise<Transaction | null> {
    try {
      const { user, transfer, fee, ...transactionData } = transaction;
      const result = await prisma.transaction.update({ where: { id }, data: transactionData });
      return toTransactionEntity(result);
    } catch (error) {
      console.error('Error updating transaction:', error);
      throw error;
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      await prisma.transaction.delete({ where: { id } });
      return true;
    } catch (error) {
      console.error('Error deleting transaction:', error);
      return false;
    }
  }

  async findByUserId(userId: number): Promise<Transaction[]> {
    try {
      const result = await prisma.transaction.findMany({ where: { userId } });
      return result.map(toTransactionEntity);
    } catch (error) {
      console.error('Error finding transactions by user ID:', error);
      throw error;
    }
  }

  async findByType(type: TransactionType): Promise<Transaction[]> {
    try {
      const result = await prisma.transaction.findMany({ where: { type } });
      return result.map(toTransactionEntity);
    } catch (error) {
      console.error('Error finding transactions by type:', error);
      throw error;
    }
  }
}
