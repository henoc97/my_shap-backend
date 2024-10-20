import { AdminService } from "../../services/admin.service";

export class FindAdminByUserIdUseCase {
    constructor(private adminService: AdminService) {}

    /**
     * Executes the use case to find an admin by user ID.
     * @param userId - The user ID associated with the admin.
     * @returns The admin associated with the specified user ID.
     */
    async execute(userId: number) {
        return this.adminService.findAdminByUserId(userId);
    }
}