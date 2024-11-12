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

@injectable()
export class TransferController {
    constructor(
        @inject(CreateTransferUseCase) private createTransferUseCase: CreateTransferUseCase,
        @inject(GetAllTransfersUseCase) private getAllTransfersUseCase: GetAllTransfersUseCase,
        @inject(GetTransferByIdUseCase) private getTransferByIdUseCase: GetTransferByIdUseCase,
        @inject(FindTransfersByStatusUseCase) private findTransfersByStatusUseCase: FindTransfersByStatusUseCase,
        @inject(FindTransfersByReceiverIdUseCase) private findTransfersByReceiverIdUseCase: FindTransfersByReceiverIdUseCase,
        @inject(FindTransfersBySenderIdUseCase) private findTransfersBySenderIdUseCase: FindTransfersBySenderIdUseCase,
        @inject(UpdateTransferUseCase) private updateTransferUseCase: UpdateTransferUseCase,
        @inject(DeleteTransferUseCase) private deleteTransferUseCase: DeleteTransferUseCase
    ) { }

    public async createTransfer(req: Request, res: Response): Promise<void> {
        try {
            const transfer = await this.createTransferUseCase.execute(req.body);
            res.status(201).json(transfer);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
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
                res.status(500).json({ error: error.message });
            } else {
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
                res.status(404).json({ error: 'Transfer not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
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
                res.status(500).json({ error: error.message });
            } else {
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
                res.status(500).json({ error: error.message });
            } else {
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
                res.status(500).json({ error: error.message });
            } else {
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
                res.status(500).json({ error: error.message });
            } else {
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
                res.status(404).json({ error: 'Transfer not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
}
