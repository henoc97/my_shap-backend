import { Router } from 'express';
import { FeeController } from '../controllers/fee.controller';
import { DIContainer } from '../../application/containers/container-inversify/container';
import { FeeDTO } from '../dtos/fee.dto';
import { validateDto } from '../../application/helper/middlewares/validate-dto.middleware';

const feeRouter = Router();
const feeController = DIContainer.getContainer().get(FeeController);

feeRouter.use(validateDto(FeeDTO));
feeRouter.post('/', feeController.createFee);
feeRouter.get('/:id', feeController.getFeeById);
feeRouter.get('/transaction/:transactionId', feeController.findFeeByTransactionId.bind(feeController));
feeRouter.put('/:id', feeController.updateFee.bind(feeController));
feeRouter.delete('/:id', feeController.deleteFee.bind(feeController));

export default feeRouter;
