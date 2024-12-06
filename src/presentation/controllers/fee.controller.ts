import { Request, Response } from 'express';
import { CreateFeeUseCase } from '../../application/use-cases/fee.use-cases/create-fee.use-case';
import { DeleteFeeUseCase } from '../../application/use-cases/fee.use-cases/delete-fee.use-case';
import { FindFeeByTransactionIdUseCase } from '../../application/use-cases/fee.use-cases/find-fee-by-transaction-id.use-case';
import { GetFeeByIdUseCase } from '../../application/use-cases/fee.use-cases/get-fee-by-id.use-case';
import { UpdateFeeUseCase } from '../../application/use-cases/fee.use-cases/update-fee.use-case';
import { inject, injectable } from 'inversify';
import TYPES from '../../application/containers/types/types';

@injectable()
export class FeeController {
    constructor(
        @inject(TYPES.CreateFeeUseCase) private createFeeUseCase: CreateFeeUseCase,
        @inject(TYPES.DeleteFeeUseCase) private deleteFeeUseCase: DeleteFeeUseCase,
        @inject(TYPES.FindFeeByTransactionIdUseCase) private findFeeByTransactionIdUseCase: FindFeeByTransactionIdUseCase,
        @inject(TYPES.GetFeeByIdUseCase) private getFeeByIdUseCase: GetFeeByIdUseCase,
        @inject(TYPES.UpdateFeeUseCase) private updateFeeUseCase: UpdateFeeUseCase
    ) { }

    public async createFee(req: Request, res: Response): Promise<void> {
        try {
            const feeDto = req.body;
            const fee = await this.createFeeUseCase.execute(feeDto);
            res.status(201).json(fee);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }

    public async deleteFee(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);
            const success = await this.deleteFeeUseCase.execute(id);
            res.status(success ? 200 : 404).json({ success });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }

    public async findFeeByTransactionId(req: Request, res: Response): Promise<void> {
        try {
            const transactionId = Number(req.params.transactionId);
            const fee = await this.findFeeByTransactionIdUseCase.execute(transactionId);
            res.status(200).json(fee);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }

    public async getFeeById(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);
            const fee = await this.getFeeByIdUseCase.execute(id);
            res.status(200).json(fee);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }

    public async updateFee(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);
            const feeData = req.body;
            const fee = await this.updateFeeUseCase.execute(id, feeData);
            res.status(200).json(fee);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }
}
