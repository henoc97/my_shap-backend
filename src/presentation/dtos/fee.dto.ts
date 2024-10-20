import { IsNumber, IsString } from 'class-validator';

export class FeeDTO {
    @IsNumber()
    id: number;

    @IsNumber()
    amount: number;

    @IsString()
    description: string;

    constructor(id: number, amount: number, description: string) {
        this.id = id;
        this.amount = amount;
        this.description = description;
    }
}
