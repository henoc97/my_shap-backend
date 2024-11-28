import { IsEmail, IsOptional, IsString, IsNumber, IsBoolean, IsDate, IsEnum } from 'class-validator';
import { Role } from '../../domain/enums/role.enum';

export class UserDTO {
    @IsNumber()
    @IsOptional()
    id?: number;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsNumber()
    balance: number;

    @IsOptional()
    @IsNumber()
    contact: string;

    @IsOptional()
    @IsNumber()
    countryCode: string;

    @IsOptional()
    @IsEnum(Role)
    role: Role;

    @IsOptional()
    @IsBoolean()
    isActive: boolean;

    @IsOptional()
    @IsString()
    otp?: number;

    @IsOptional()
    @IsDate()
    createdAt: Date;

    @IsOptional()
    @IsDate()
    updatedAt: Date;

    constructor(
        id: number,
        name: string,
        email: string | undefined,
        contact: string,
        countryCode: string,
        balance: number,
        role: Role,
        isActive: boolean,
        createdAt: Date,
        updatedAt: Date,
        otp?: number,
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.otp = otp;
        this.countryCode = countryCode;
        this.balance = balance;
        this.role = role;
        this.isActive = isActive;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
