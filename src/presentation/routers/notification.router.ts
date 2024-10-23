import { Router } from 'express';
import { NotificationController } from '../controllers/notification.controller';
import { container } from '../../application/containers/repositories.container';

const notificationRouter = Router();
const notificationController = container.get(NotificationController);

notificationRouter.post('/', notificationController.createNotification);
notificationRouter.get('/', notificationController.getAllNotifications);
notificationRouter.get('/:id', notificationController.getNotificationById);
notificationRouter.delete('/:id', notificationController.deleteNotification);
notificationRouter.put('/:id', notificationController.updateNotification);
notificationRouter.get('/user/:userId', notificationController.findNotificationsByUserId);
notificationRouter.patch('/:id/read', notificationController.markNotificationAsRead);

export default notificationRouter;
