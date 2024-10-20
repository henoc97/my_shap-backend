import { AdminService } from "../../services/admin.service";

export class GetAdminByIdUseCase {
    constructor(private adminService: AdminService) {}

    /**
     * Executes the use case to retrieve an admin by ID.
     * @param id - The ID of the admin.
     * @returns The admin with the specified ID.
     */
    async execute(id: number) {
        return this.adminService.getAdminById(id);
    }
}