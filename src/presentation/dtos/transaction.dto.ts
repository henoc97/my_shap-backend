import { IsNumber, IsString, IsDate, IsEnum } from 'class-validator';
import { TransactionType } from '../../domain/enums/transaction-type.enum';

export class TransactionDTO {
    @IsNumber()
    id: number;

    @IsNumber()
    amount: number;

    @IsNumber()
    userId: number;

    @IsEnum(TransactionType)
    type: TransactionType;

    @IsDate()
    createdAt: Date;

    @IsString()
    description: string;

    constructor(
        id: number,
        amount: number,
        userId: number,
        type: TransactionType,
        createdAt: Date,
        description: string
    ) {
        this.id = id;
        this.amount = amount;
        this.userId = userId;
        this.type = type;
        this.createdAt = createdAt;
        this.description = description;
    }
}
