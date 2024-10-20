import { Admin } from "../entities/admin.entity";

export interface IAdminRepository {
    create(admin: Admin): Promise<Admin>;
    getAll(): Promise<Admin[]>;
    getById(id: number): Promise<Admin | null>;
    update(id: number, admin: Partial<Admin>): Promise<Admin | null>;
    delete(id: number): Promise<boolean>;
    findByUserId(userId: number): Promise<Admin | null>;
}
