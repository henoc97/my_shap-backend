import { Request, Response } from 'express';

import { GetAllTransfersUseCase } from '../../application/use-cases/transfer.use-cases/get-all-transfers.use-case';
import { GetTransferByIdUseCase } from '../../application/use-cases/transfer.use-cases/get-transfer-by-id.use-case';
import { FindTransfersByStatusUseCase } from '../../application/use-cases/transfer.use-cases/find-transfers-by-status.use-case';
import { FindTransfersByReceiverIdUseCase } from '../../application/use-cases/transfer.use-cases/find-transfers-by-receiver-id.use-case';
import { FindTransfersBySenderIdUseCase } from '../../application/use-cases/transfer.use-cases/find-transfers-by-sender-id.use-case';
import { UpdateTransferUseCase } from '../../application/use-cases/transfer.use-cases/update-transfer.use-case';
import { DeleteTransferUseCase } from '../../application/use-cases/transfer.use-cases/delete-transfer.use-case';
import { CreateTransferUseCase } from '../../application/use-cases/transfer.use-cases/create-transfer.use-case';
import { inject, injectable } from 'inversify';
import { TransferStatus } from '../../domain/enums/transfert-status.enum';
import TYPES from '../../application/containers/types/types';
import { validateOtpCreate } from '../../application/helper/middlewares/validate-otp-create';
import logger from '../../application/helper/logger/logRotation';

@injectable()
export class TransferController {
    constructor(
        @inject(TYPES.CreateTransferUseCase) private createTransferUseCase: CreateTransferUseCase,
        @inject(TYPES.GetAllTransfersUseCase) private getAllTransfersUseCase: GetAllTransfersUseCase,
        @inject(TYPES.GetTransferByIdUseCase) private getTransferByIdUseCase: GetTransferByIdUseCase,
        @inject(TYPES.FindTransfersByStatusUseCase) private findTransfersByStatusUseCase: FindTransfersByStatusUseCase,
        @inject(TYPES.FindTransfersByReceiverIdUseCase) private findTransfersByReceiverIdUseCase: FindTransfersByReceiverIdUseCase,
        @inject(TYPES.FindTransfersBySenderIdUseCase) private findTransfersBySenderIdUseCase: FindTransfersBySenderIdUseCase,
        @inject(TYPES.UpdateTransferUseCase) private updateTransferUseCase: UpdateTransferUseCase,
        @inject(TYPES.DeleteTransferUseCase) private deleteTransferUseCase: DeleteTransferUseCase
    ) {
        this.createTransfer = this.createTransfer.bind(this);
        this.getAllTransfers = this.getAllTransfers.bind(this);
        this.getTransferById = this.getTransferById.bind(this);
        this.findTransfersByStatus = this.findTransfersByStatus.bind(this);
        this.findTransfersByReceiverId = this.findTransfersByReceiverId.bind(this);
        this.findTransfersBySenderId = this.findTransfersBySenderId.bind(this);
        this.updateTransfer = this.updateTransfer.bind(this);
        this.deleteTransfer = this.deleteTransfer.bind(this);
    }

    public async createTransfer(req: any, res: Response): Promise<void> {
        try {
            const contact = `+${req.user.countryCode}${req.user.contact}`
            validateOtpCreate(req, res, contact, () => this.createTransferUseCase.execute(req.dtoInstance))
        } catch (error) {
            if (error instanceof Error) {
                logger.error({ error: error.message });
                res.status(500).json({ error: error.message });
            } else {
                logger.error({ error: 'An unknown error occurred' });
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async getAllTransfers(req: Request, res: Response): Promise<void> {
        try {
            const transfers = await this.getAllTransfersUseCase.execute();
            res.status(200).json(transfers);
        } catch (error) {
            if (error instanceof Error) {
                logger.error({ error: error.message });
                res.status(500).json({ error: error.message });
            } else {
                logger.error({ error: 'An unknown error occurred' });
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async getTransferById(req: Request, res: Response): Promise<void> {
        try {
            const transfer = await this.getTransferByIdUseCase.execute(Number(req.params.id));
            if (transfer) {
                res.status(200).json(transfer);
            } else {
                logger.error({ error: 'Transfer not found' });
                res.status(404).json({ error: 'Transfer not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                logger.error({ error: error.message });
                res.status(500).json({ error: error.message });
            } else {
                logger.error({ error: 'An unknown error occurred' });
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async findTransfersByStatus(req: Request, res: Response): Promise<void> {
        try {
            const transfers = await this.findTransfersByStatusUseCase.execute(req.params.status as unknown as TransferStatus);
            res.status(200).json(transfers);
        } catch (error) {
            if (error instanceof Error) {
                logger.error({ error: error.message });
                res.status(500).json({ error: error.message });
            } else {
                logger.error({ error: 'An unknown error occurred' });
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async findTransfersByReceiverId(req: Request, res: Response): Promise<void> {
        try {
            const transfers = await this.findTransfersByReceiverIdUseCase.execute(Number(req.params.receiverId));
            res.status(200).json(transfers);
        } catch (error) {
            if (error instanceof Error) {
                logger.error({ error: error.message });
                res.status(500).json({ error: error.message });
            } else {
                logger.error({ error: 'An unknown error occurred' });
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async findTransfersBySenderId(req: Request, res: Response): Promise<void> {
        try {
            const transfers = await this.findTransfersBySenderIdUseCase.execute(Number(req.params.senderId));
            res.status(200).json(transfers);
        } catch (error) {
            if (error instanceof Error) {
                logger.error({ error: error.message });
                res.status(500).json({ error: error.message });
            } else {
                logger.error({ error: 'An unknown error occurred' });
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async updateTransfer(req: Request, res: Response): Promise<void> {
        try {
            const updatedTransfer = await this.updateTransferUseCase.execute(Number(req.params.id), req.body);
            res.status(200).json(updatedTransfer);
        } catch (error) {
            if (error instanceof Error) {
                logger.error({ error: error.message });
                res.status(500).json({ error: error.message });
            } else {
                logger.error({ error: 'An unknown error occurred' });
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async deleteTransfer(req: Request, res: Response): Promise<void> {
        try {
            const success = await this.deleteTransferUseCase.execute(Number(req.params.id));
            if (success) {
                res.status(204).send();
            } else {
                logger.error({ error: 'Transfer not found' });
                res.status(404).json({ error: 'Transfer not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                logger.error({ error: error.message });
                res.status(500).json({ error: error.message });
            } else {
                logger.error({ error: 'An unknown error occurred' });
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
}
