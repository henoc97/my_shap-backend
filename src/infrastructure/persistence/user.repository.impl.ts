import { IUserRepository } from '../../domain/repositories/user.repository';
import { User } from '../../domain/entities/user.entity';
import prisma from '../../../prisma/prisma.service';
import { toUserEntity } from '../../application/helper/prisma.to.entity/user.to.entity';
import { injectable } from 'inversify';

/**
 * UserRepositoryImpl is an implementation of the IUserRepository interface
 * that handles user persistence operations in the database.
 */
@injectable()
export class UserRepositoryImpl implements IUserRepository {

  async findByContact(countryCode: string, contact: string): Promise<User | null> {
    try {
      const result = await prisma.user.findFirst({
        where: {
          AND: [
            { countryCode: countryCode },
            { contact: contact }
          ]
        }
      });
      return toUserEntity(result);
    } catch (error) {
      console.error('Error finding user by contact:', error);
      throw error;
    }
  }

  async isUserByContact(countryCode: string, contact: string): Promise<boolean> {
    try {
      const result = await prisma.user.findFirst({
        where: {
          AND: [
            { countryCode: countryCode },
            { contact: contact }
          ]
        }
      });
      return result !== null;
    } catch (error) {
      console.error('Error checking if user exists by contact:', error);
      throw error;
    }
  }

  /**
   * Creates a new user in the database.
   * @param user - The user to create.
   * @returns The created user.
   */
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

  /**
   * Retrieves all users from the database.
   * @returns An array of users.
   */
  async getAll(): Promise<User[]> {
    try {
      const result = await prisma.user.findMany();
      return result.map(toUserEntity);
    } catch (error) {
      console.error('Error reading all users:', error);
      throw error;
    }
  }

  /**
   * Retrieves a user by their ID.
   * @param id - The ID of the user to retrieve.
   * @returns The corresponding user or null if not found.
   */
  async getById(id: number): Promise<User | null> {
    try {
      const result = await prisma.user.findUnique({ where: { id } });
      return toUserEntity(result);
    } catch (error) {
      console.error('Error reading user by ID:', error);
      throw error;
    }
  }

  /**
   * Updates an existing user's information.
   * @param id - The ID of the user to update.
   * @param user - The user data to update.
   * @returns The updated user or null if not found.
   */
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

  /**
   * Deletes a user from the database.
   * @param id - The ID of the user to delete.
   * @returns true if the deletion was successful, otherwise false.
   */
  async delete(id: number): Promise<boolean> {
    try {
      await prisma.user.delete({ where: { id } });
      return true;
    } catch (error) {
      console.error('Error deleting user:', error);
      return false;
    }
  }

  /**
   * Finds a user by their email address.
   * @param email - The email address of the user to search for.
   * @returns The corresponding user or null if not found.
   */
  async findByEmail(email: string): Promise<User | null> {
    try {
      const result = await prisma.user.findUnique({ where: { email } });
      return toUserEntity(result);
    } catch (error) {
      console.error('Error finding user by email:', error);
      throw error;
    }
  }

  /**
   * Finds all active users.
   * @returns An array of active users.
   */
  async findActiveUsers(): Promise<User[]> {
    try {
      const result = await prisma.user.findMany({ where: { isActive: true } });
      return result.map(toUserEntity);
    } catch (error) {
      console.error('Error finding active users:', error);
      throw error;
    }
  }

  /**
   * Method not implemented for finding a user's contact.
   * @returns A promise of { countryCode, contact }.
   */
  async findUserContact(id: number): Promise<{ countryCode: string | undefined; contact: string | undefined }> {
    try {
      const result = await prisma.user.findUnique({
        where: { id: id },
        select: { countryCode: true, contact: true }
      });
      return { countryCode: result?.countryCode, contact: result?.countryCode };
    } catch (error) {
      console.error('Error finding user\' contact:', error);
      throw error;
    }
  }
}
