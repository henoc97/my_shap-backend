import { inject, injectable } from "inversify";
import { Fee } from "../../domain/entities/fee.entity";
import { IFeeRepository } from "../../domain/repositories/fee.repository";

@injectable()
export class FeeService {
    constructor(@inject("IFeeRepository") private feeRepository: IFeeRepository) { }

    async createFee(fee: Fee): Promise<Fee> {
        return this.feeRepository.create(fee);
    }

    async getAllFees(): Promise<Fee[]> {
        return this.feeRepository.getAll();
    }

    async getFeeById(id: number): Promise<Fee | null> {
        return this.feeRepository.getById(id);
    }

    async updateFee(id: number, fee: Partial<Fee>): Promise<Fee | null> {
        return this.feeRepository.update(id, fee);
    }

    async deleteFee(id: number): Promise<boolean> {
        return this.feeRepository.delete(id);
    }

    async findFeeByTransactionId(transactionId: number): Promise<Fee | null> {
        return this.feeRepository.findByTransactionId(transactionId);
    }
}