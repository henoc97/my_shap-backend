import { AdminService } from "../../services/admin.service";

export class DeleteAdminUseCase {
    constructor(private adminService: AdminService) {}

    /**
     * Executes the use case to delete an admin.
     * @param id - The ID of the admin to delete.
     * @returns A boolean indicating if the deletion was successful.
     */
    async execute(id: number) {
        return this.adminService.deleteAdmin(id);
    }
}