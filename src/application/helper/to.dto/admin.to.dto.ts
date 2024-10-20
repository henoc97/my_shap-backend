import { Admin } from "../../../domain/entities/admin.entity";
import { AdminDTO } from "../../../presentation/dtos/admin.dto";


export function toAdminDTO(entity: Admin): AdminDTO {
    return new AdminDTO(entity.id, entity.userId, entity.createdAt);
}
