import { IUserRepository } from '../../domain/repositories/user.repository';
import { User } from '../../domain/entities/user.entity';
import prisma from '../../../prisma/prisma.service';
import { toUserEntity } from '../../application/helper/prisma.to.entity/user.to.entity';
import { injectable } from 'inversify';

@injectable()
export class UserRepositoryImpl implements IUserRepository {

  async create(user: User): Promise<User> {
    try {
      const { id, transfersSent, transfersReceived, transactions, notifications, agent, admin, ...userData } = user;
      const result = await prisma.user.create({ data: userData });
      const userDataEntity = toUserEntity(result);
      return userDataEntity;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async getAll(): Promise<User[]> {
    try {
      const result = await prisma.user.findMany();
      return result.map(toUserEntity);
    } catch (error) {
      console.error('Error reading all users:', error);
      throw error;
    }
  }

  async getById(id: number): Promise<User | null> {
    try {
      const result = await prisma.user.findUnique({ where: { id } });
      return toUserEntity(result);
    } catch (error) {
      console.error('Error reading user by ID:', error);
      throw error;
    }
  }

  async update(id: number, user: Partial<User>): Promise<User | null> {
    try {
      const { transfersSent, transfersReceived, transactions, notifications, agent, admin, ...userData } = user;
      const result = await prisma.user.update({ where: { id }, data: userData });
      const userDataEntity = toUserEntity(result);
      return userDataEntity;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      await prisma.user.delete({ where: { id } });
      return true;
    } catch (error) {
      console.error('Error deleting user:', error);
      return false;
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      const result = await prisma.user.findUnique({ where: { email } });
      return toUserEntity(result);
    } catch (error) {
      console.error('Error finding user by email:', error);
      throw error;
    }
  }

  async findActiveUsers(): Promise<User[]> {
    try {
      const result = await prisma.user.findMany({ where: { isActive: true } });
      return result.map(toUserEntity);
    } catch (error) {
      console.error('Error finding active users:', error);
      throw error;
    }
  }
}
