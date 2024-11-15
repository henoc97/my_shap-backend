import { Router } from 'express';
import { TransferController } from '../controllers/transfer.controller';
import { DIContainer } from '../../application/containers/container-inversify/container';
import { TransferDTO } from '../dtos/transfer.dto';
import { validateDto } from '../../application/helper/middlewares/validate-dto.middleware';

const transferRouter = Router();
const transferController = DIContainer.getContainer().get(TransferController);

transferRouter.use(validateDto(TransferDTO));

transferRouter.post('/', transferController.createTransfer);
transferRouter.get('/', transferController.getAllTransfers);
transferRouter.get('/:id', transferController.getTransferById);
transferRouter.get('/status/:status', transferController.findTransfersByStatus);
transferRouter.get('/receiver/:receiverId', transferController.findTransfersByReceiverId);
transferRouter.get('/sender/:senderId', transferController.findTransfersBySenderId);
transferRouter.put('/:id', transferController.updateTransfer);
transferRouter.delete('/:id', transferController.deleteTransfer);

export default transferRouter;
