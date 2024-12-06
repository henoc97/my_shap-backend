import { User } from "../../../domain/entities/user.entity";


export function toUserEntity(dto: any): User {
    return new User(
        dto.id,
        dto.contact,
        dto.name,
        dto.email,
        dto.password,
        dto.countryCode,
        dto.balance,
        dto.role,
        dto.isActive,
        // dto.createdAt
    );
}
