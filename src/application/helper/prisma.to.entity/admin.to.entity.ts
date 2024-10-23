import { Admin } from "../../../domain/entities/admin.entity";
import { AdminDTO } from "../../../presentation/dtos/admin.dto";

export function toAdminEntity(dto: any): Admin {
  return new Admin(
    dto.id,
    dto.userId,
  );
}
