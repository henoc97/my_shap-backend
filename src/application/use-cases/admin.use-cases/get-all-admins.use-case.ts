import { injectable, inject } from "inversify";
import { AdminService } from "../../services/admin.service";
import TYPES from "../../containers/types/types";

@injectable()
export class GetAllAdminsUseCase {
    constructor(@inject(TYPES.AdminService) private adminService: AdminService) { }

    /**
     * Executes the use case to retrieve all admins.
     * @returns A list of all admins.
     */
    async execute() {
        return this.adminService.getAllAdmins();
    }
}
