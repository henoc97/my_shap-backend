import { AdminDTO } from "../../../presentation/dtos/admin.dto";
import { AdminService } from "../../services/admin.service";

export class CreateAdminUseCase {
    constructor(private adminService: AdminService) {}

    /**
     * Executes the use case to create a new admin.
     * @param adminDto - The DTO containing admin data.
     * @returns The created admin.
     */
    async execute(adminDto: AdminDTO) {
        return this.adminService.createAdmin(adminDto);
    }
}