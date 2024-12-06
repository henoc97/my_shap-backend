import { injectable, inject } from "inversify";
import { AdminService } from "../../services/admin.service";
import TYPES from "../../containers/types/types";

@injectable()
export class FindAdminByUserIdUseCase {
    constructor(@inject(TYPES.AdminService) private adminService: AdminService) { }

    /**
     * Executes the use case to find an admin by user ID.
     * @param userId - The user ID associated with the admin.
     * @returns The admin associated with the specified user ID.
     */
    async execute(userId: number) {
        return this.adminService.findAdminByUserId(userId);
    }
}