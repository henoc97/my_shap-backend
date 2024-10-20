import { Fee } from "../entities/fee.entity";

export interface IFeeRepository {
    create(fee: Fee): Promise<Fee>;
    getAll(): Promise<Fee[]>;
    getById(id: number): Promise<Fee | null>;
    update(id: number, fee: Partial<Fee>): Promise<Fee | null>;
    delete(id: number): Promise<boolean>;
    findByTransactionId(transactionId: number): Promise<Fee | null>;
}
