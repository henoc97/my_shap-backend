import { IsNumber, IsString, IsBoolean, IsDate } from 'class-validator';

export class NotificationDTO {
    @IsNumber()
    id: number;

    @IsNumber()
    userId: number;

    @IsString()
    message: string;

    @IsBoolean()
    isRead: boolean;

    @IsDate()
    createdAt: Date;

    constructor(
        id: number,
        userId: number,
        message: string,
        isRead: boolean,
        createdAt: Date
    ) {
        this.id = id;
        this.userId = userId;
        this.message = message;
        this.isRead = isRead;
        this.createdAt = createdAt;
    }
}
