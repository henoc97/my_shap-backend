import { injectable } from "inversify";
import { AdminService } from "../../services/admin.service";

@injectable()
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