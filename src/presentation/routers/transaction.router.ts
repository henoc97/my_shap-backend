import { Router } from 'express';
import { TransactionController } from '../controllers/transaction.controller';
import { DIContainer } from '../../application/containers/container-inversify/container';
import { TransactionDTO } from '../dtos/transaction.dto';
import { validateDto } from '../../application/helper/middlewares/validate-dto.middleware';

const transactionRouter = Router();
const transactionController = DIContainer.getContainer().get(TransactionController);

transactionRouter.use(validateDto(TransactionDTO));

transactionRouter.post('/', transactionController.createTransaction);
transactionRouter.get('/', transactionController.getAllTransactions);
transactionRouter.get('/:id', transactionController.getTransactionById);
transactionRouter.get('/user/:userId', transactionController.findTransactionsByUserId);
transactionRouter.get('/:type', transactionController.findTransactionsByType);
transactionRouter.put('/:id', transactionController.updateTransaction);
transactionRouter.delete('/:id', transactionController.deleteTransaction);

export default transactionRouter;
