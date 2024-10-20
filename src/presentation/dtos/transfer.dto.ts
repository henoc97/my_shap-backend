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

    @IsOptional()
    @IsNumber()
    feeId?: number;

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
        isNonUser: boolean
    ) {
        this.id = id;
        this.amount = amount;
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.createdAt = createdAt;
        this.status = status;
        this.isNonUser = isNonUser;
    }
}
