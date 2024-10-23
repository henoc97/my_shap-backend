import { Request, Response } from 'express';
import { CreateNotificationUseCase } from '../../application/use-cases/notification.use-cases/create-notification.use-case';
import { GetAllNotificationsUseCase } from '../../application/use-cases/notification.use-cases/get-all-notifications.use-case';
import { injectable } from 'inversify';

@injectable()
export class NotificationController {
    constructor(
        private createNotificationUseCase: CreateNotificationUseCase,
        private getAllNotificationsUseCase: GetAllNotificationsUseCase
    ) {}

    public async createNotification(req: Request, res: Response): Promise<void> {
        try {
            const notificationData = req.body;
            const notification = await this.createNotificationUseCase.execute(notificationData);
            res.status(201).json(notification);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async getAllNotifications(req: Request, res: Response): Promise<void> {
        try {
            const notifications = await this.getAllNotificationsUseCase.execute();
            res.status(200).json(notifications);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
}
