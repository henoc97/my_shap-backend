import { injectable } from "inversify";
import { Admin } from "../../domain/entities/admin.entity";
import { IAdminRepository } from "../../domain/repositories/admin.repository";

@injectable()
export class AdminService {
    constructor(private adminRepository: IAdminRepository) {}

    async createAdmin(admin: Admin): Promise<Admin> {
        return this.adminRepository.create(admin);
    }

    async getAllAdmins(): Promise<Admin[]> {
        return this.adminRepository.getAll();
    }

    async getAdminById(id: number): Promise<Admin | null> {
        return this.adminRepository.getById(id);
    }

    async updateAdmin(id: number, admin: Partial<Admin>): Promise<Admin | null> {
        return this.adminRepository.update(id, admin);
    }

    async deleteAdmin(id: number): Promise<boolean> {
        return this.adminRepository.delete(id);
    }

    async findAdminByUserId(userId: number): Promise<Admin | null> {
        return this.adminRepository.findByUserId(userId);
    }
}