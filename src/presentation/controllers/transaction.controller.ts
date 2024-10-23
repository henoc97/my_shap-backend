import { Request, Response } from 'express';
import { CreateTransactionUseCase } from '../../application/use-cases/transaction.use-cases/create-transaction.use-case';
import { GetTransactionByIdUseCase } from '../../application/use-cases/transaction.use-cases/get-transaction-by-id.use-case';
import { GetAllTransactionsUseCase } from '../../application/use-cases/transaction.use-cases/get-all-transactions.use-case';
import { FindTransactionsByUserIdUseCase } from '../../application/use-cases/transaction.use-cases/find-transactions-by-user-id.use-case';
import { UpdateTransactionUseCase } from '../../application/use-cases/transaction.use-cases/update-transaction.use-case';
import { DeleteTransactionUseCase } from '../../application/use-cases/transaction.use-cases/delete-transaction.use-case';
import { injectable } from 'inversify';

@injectable()
export class TransactionController {
    constructor(
        private createTransactionUseCase: CreateTransactionUseCase,
        private getTransactionByIdUseCase: GetTransactionByIdUseCase,
        private getAllTransactionsUseCase: GetAllTransactionsUseCase,
        private findTransactionsByUserIdUseCase: FindTransactionsByUserIdUseCase,
        private updateTransactionUseCase: UpdateTransactionUseCase,
        private deleteTransactionUseCase: DeleteTransactionUseCase
    ) {}

    public async createTransaction(req: Request, res: Response): Promise<void> {
        try {
            const transaction = await this.createTransactionUseCase.execute(req.body);
            res.status(201).json(transaction);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async getTransactionById(req: Request, res: Response): Promise<void> {
        try {
            const transaction = await this.getTransactionByIdUseCase.execute(Number(req.params.id));
            if (transaction) {
                res.status(200).json(transaction);
            } else {
                res.status(404).json({ error: 'Transaction not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async getAllTransactions(req: Request, res: Response): Promise<void> {
        try {
            const transactions = await this.getAllTransactionsUseCase.execute();
            res.status(200).json(transactions);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async findTransactionsByUserId(req: Request, res: Response): Promise<void> {
        try {
            const transactions = await this.findTransactionsByUserIdUseCase.execute(Number(req.params.userId));
            res.status(200).json(transactions);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async updateTransaction(req: Request, res: Response): Promise<void> {
        try {
            const updatedTransaction = await this.updateTransactionUseCase.execute(Number(req.params.id), req.body);
            res.status(200).json(updatedTransaction);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async deleteTransaction(req: Request, res: Response): Promise<void> {
        try {
            const success = await this.deleteTransactionUseCase.execute(Number(req.params.id));
            if (success) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Transaction not found' });
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
