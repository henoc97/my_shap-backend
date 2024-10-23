import { Router } from 'express';
import { TransferController } from '../controllers/transfer.controller';
import { container } from '../../application/containers/main.container';

const transferRouter = Router();
const transferController = container.get(TransferController);

transferRouter.post('/', transferController.createTransfer);
transferRouter.get('/', transferController.getAllTransfers);
transferRouter.get('/:id', transferController.getTransferById);
transferRouter.get('/status/:status', transferController.findTransfersByStatus);
transferRouter.get('/receiver/:receiverId', transferController.findTransfersByReceiverId);
transferRouter.get('/sender/:senderId', transferController.findTransfersBySenderId);
transferRouter.put('/:id', transferController.updateTransfer);
transferRouter.delete('/:id', transferController.deleteTransfer);

export default transferRouter;
