import { IAdminRepository } from '../../domain/repositories/admin.repository';
import { Admin } from '../../domain/entities/admin.entity';
import prisma from '../../prisma/prisma.service';
import { toAdminEntity } from '../../application/helper/prisma.to.entity/admin.to.entity';

export class AdminRepositoryImpl implements IAdminRepository {
  async create(admin: Admin): Promise<Admin> {
    try {
      const { id, user, ...adminData } = admin;
      const result = await prisma.admin.create({ data: adminData });
      return toAdminEntity(result);
    } catch (error) {
      console.error('Error creating admin:', error);
      throw error;
    }
  }

  async getAll(): Promise<Admin[]> {
    try {
      const result = await prisma.admin.findMany();
      return result.map(toAdminEntity);
    } catch (error) {
      console.error('Error getting all admins:', error);
      throw error;
    }
  }

  async getById(id: number): Promise<Admin | null> {
    try {
      const result = await prisma.admin.findUnique({ where: { id } });
      return toAdminEntity(result);
    } catch (error) {
      console.error('Error getting admin by ID:', error);
      throw error;
    }
  }

  async update(id: number, admin: Partial<Admin>): Promise<Admin | null> {
    try {
      const { user, ...adminData } = admin;
      const result = await prisma.admin.update({ where: { id }, data: adminData });
      return toAdminEntity(result);
    } catch (error) {
      console.error('Error updating admin:', error);
      throw error;
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      await prisma.admin.delete({ where: { id } });
      return true;
    } catch (error) {
      console.error('Error deleting admin:', error);
      return false;
    }
  }

  async findByUserId(userId: number): Promise<Admin | null> {
    try {
      const result = await prisma.admin.findUnique({ where: { userId } });
      return toAdminEntity(result);
    } catch (error) {
      console.error('Error finding admin by user ID:', error);
      throw error;
    }
  }
}
