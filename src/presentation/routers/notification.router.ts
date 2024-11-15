import { Router } from 'express';
import { NotificationController } from '../controllers/notification.controller';
import { DIContainer } from '../../application/containers/container-inversify/container';
import { NotificationDTO } from '../dtos/notification.dto';
import { validateDto } from '../../application/helper/middlewares/validate-dto.middleware';

const notificationRouter = Router();
const notificationController = DIContainer.getContainer().get(NotificationController);

notificationRouter.use(validateDto(NotificationDTO));

notificationRouter.post('/', notificationController.createNotification);
notificationRouter.get('/', notificationController.getAllNotifications);
notificationRouter.get('/:id', notificationController.getNotificationById);
notificationRouter.delete('/:id', notificationController.deleteNotification);
notificationRouter.put('/:id', notificationController.updateNotification);
notificationRouter.get('/user/:userId', notificationController.findNotificationsByUserId);
notificationRouter.patch('/:id/read', notificationController.markNotificationAsRead);

export default notificationRouter;
