import { IsNumber, IsOptional, IsString, IsDate, IsBoolean } from 'class-validator';
import { TransferStatus } from '../../domain/enums/transfert-status.enum';

export class TransferDTO {
    @IsNumber()
    id: number;

    @IsNumber()
    amount: number;

    @IsNumber()
    senderId: number;

    @IsOptional()
    @IsNumber()
    receiverId?: number;

    @IsOptional()
    @IsNumber()
    agentId?: number;

    // Reciver's
    @IsOptional()
    @IsString()
    contact?: string;

    // Reciver's
    @IsOptional()
    @IsString()
    countryCode?: string;

    @IsOptional()
    @IsNumber()
    feeId?: number;

    @IsOptional()
    @IsString()
    otp?: string;

    @IsOptional()
    @IsDate()
    expiresAt?: Date;

    @IsDate()
    createdAt: Date;

    @IsString()
    status: TransferStatus;

    @IsBoolean()
    isNonUser: boolean;

    constructor(
        id: number,
        amount: number,
        senderId: number,
        receiverId: number | undefined,
        createdAt: Date,
        status: TransferStatus,
        isNonUser: boolean,
        contact?: string,
        countryCode?: string,
        otp?: string,
    ) {
        this.id = id;
        this.amount = amount;
        this.senderId = senderId;
        this.contact = contact;
        this.countryCode = countryCode;
        this.receiverId = receiverId;
        this.otp = otp;
        this.createdAt = createdAt;
        this.status = status;
        this.isNonUser = isNonUser;
    }
}
