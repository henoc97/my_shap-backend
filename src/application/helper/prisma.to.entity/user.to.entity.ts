import { User } from "../../../domain/entities/user.entity";


export function toUserEntity(dto: any): User {
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
