import { Router } from 'express';
import { TransactionController } from '../controllers/transaction.controller';
import { container } from '../../application/containers/main.container';

const transactionRouter = Router();
const transactionController = container.get(TransactionController);

transactionRouter.post('/', transactionController.createTransaction);
transactionRouter.get('/', transactionController.getAllTransactions);
transactionRouter.get('/:id', transactionController.getTransactionById);
transactionRouter.get('/user/:userId', transactionController.findTransactionsByUserId);
transactionRouter.get('/:type', transactionController.findTransactionsByType);
transactionRouter.put('/:id', transactionController.updateTransaction);
transactionRouter.delete('/:id', transactionController.deleteTransaction);

export default transactionRouter;
