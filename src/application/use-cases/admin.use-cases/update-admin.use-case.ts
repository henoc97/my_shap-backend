import { injectable, inject } from "inversify";
import { AdminService } from "../../services/admin.service";
import { Admin } from "../../../domain/entities/admin.entity";
import TYPES from "../../containers/types/types";

@injectable()
export class UpdateAdminUseCase {
    constructor(@inject(TYPES.AdminService) private adminService: AdminService) { }

    /**
     * Executes the use case to update an admin.
     * @param id - The ID of the admin to update.
     * @param admin - The partial admin data to update.
     * @returns The updated admin.
     */
    async execute(id: number, admin: Partial<Admin>) {
        return this.adminService.updateAdmin(id, admin);
    }
}