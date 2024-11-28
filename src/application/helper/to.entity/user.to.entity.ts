import { User } from "../../../domain/entities/user.entity";
import { UserDTO } from "../../../presentation/dtos/user.dto";


export function toUserEntity(dto: UserDTO): User {
    return new User(
        dto.id!,
        dto.contact,
        dto.name,
        dto.email,
        "",
        dto.countryCode,
        dto.balance,
        dto.role,
        dto.isActive
    );
}
