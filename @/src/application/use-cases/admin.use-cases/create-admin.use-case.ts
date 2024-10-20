import { AdminService } from "../../services/admin.service";
import { AdminDTO } from "../../presentation/dtos/admin.dto";

export class CreateAdminUseCase {
    constructor(private adminService: AdminService) {}

    async execute(adminDto: AdminDTO) {
        return this.adminService.createAdmin(adminDto);
    }
}
