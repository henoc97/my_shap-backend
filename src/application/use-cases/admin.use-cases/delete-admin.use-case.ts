import { injectable, inject } from "inversify";
import { AdminService } from "../../services/admin.service";
import TYPES from "../../containers/types/types";

@injectable()
export class DeleteAdminUseCase {
    constructor(@inject(TYPES.AdminService) private adminService: AdminService) { }

    /**
     * Executes the use case to delete an admin.
     * @param id - The ID of the admin to delete.
     * @returns A boolean indicating if the deletion was successful.
     */
    async execute(id: number) {
        return this.adminService.deleteAdmin(id);
    }
}