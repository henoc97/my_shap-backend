import { User } from "../../../domain/entities/user.entity";
import { UserDTO } from "../../../presentation/dtos/user.dto";


export function toUserDTO(entity: User): UserDTO {
    return new UserDTO(
        entity.id,
        entity.name,
        entity.email,
        entity.balance,
        entity.role,
        entity.isActive,
        entity.createdAt,
        entity.updatedAt
    );
}
