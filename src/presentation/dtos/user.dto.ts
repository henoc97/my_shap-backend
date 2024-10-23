import { IsEmail, IsOptional, IsString, IsNumber, IsBoolean, IsDate, IsEnum } from 'class-validator';
import { Role } from '../../domain/enums/role.enum';

export class UserDTO {
    @IsNumber()
    id: number;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    name: string;

    @IsNumber()
    balance: number;

    @IsEnum(Role)
    role: Role;

    @IsBoolean()
    isActive: boolean;

    @IsDate()
    createdAt: Date;

    @IsDate()
    updatedAt: Date;

    constructor(
        id: number,
        name: string,
        email: string | undefined,
        balance: number,
        role: Role,
        isActive: boolean,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.balance = balance;
        this.role = role;
        this.isActive = isActive;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
