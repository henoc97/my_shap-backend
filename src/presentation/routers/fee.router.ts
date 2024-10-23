import { Router } from 'express';
import { FeeController } from '../controllers/fee.controller';
import { container } from '../../application/containers/main.container';

const feeRouter = Router();
const feeController = container.get(FeeController);

feeRouter.post('/', feeController.createFee);
feeRouter.get('/:id', feeController.getFeeById);
feeRouter.get('/transaction/:transactionId', feeController.findFeeByTransactionId.bind(feeController));
feeRouter.put('/:id', feeController.updateFee.bind(feeController));
feeRouter.delete('/:id', feeController.deleteFee.bind(feeController));

export default feeRouter;
