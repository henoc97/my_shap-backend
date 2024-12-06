import { injectable, inject } from "inversify";
import { AdminService } from "../../services/admin.service";
import TYPES from "../../containers/types/types";

@injectable()
export class GetAdminByIdUseCase {
    constructor(@inject(TYPES.AdminService) private adminService: AdminService) { }

    /**
     * Executes the use case to retrieve an admin by ID.
     * @param id - The ID of the admin.
     * @returns The admin with the specified ID.
     */
    async execute(id: number) {
        return this.adminService.getAdminById(id);
    }
}