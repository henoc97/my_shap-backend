import { IsNumber, IsDate } from 'class-validator';

export class AgentDTO {
    @IsNumber()
    id: number;

    @IsNumber()
    userId: number;

    @IsDate()
    createdAt: Date;

    constructor(id: number, userId: number, createdAt: Date) {
        this.id = id;
        this.userId = userId;
        this.createdAt = createdAt;
    }
}
