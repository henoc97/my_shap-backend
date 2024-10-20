import { User } from "../../../domain/entities/user.entity";
import { UserDTO } from "../../../presentation/dtos/user.dto";


export function toUserEntity(dto: UserDTO): User {
    return new User(
        dto.id,
        dto.name,
        dto.email,
        "",
        dto.balance,
        dto.role,
        dto.isActive
    );
}
