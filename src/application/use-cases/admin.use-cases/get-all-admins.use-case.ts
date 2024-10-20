import { AdminService } from "../../services/admin.service";

export class GetAllAdminsUseCase {
    constructor(private adminService: AdminService) {}

    /**
     * Executes the use case to retrieve all admins.
     * @returns A list of all admins.
     */
    async execute() {
        return this.adminService.getAllAdmins();
    }
}
