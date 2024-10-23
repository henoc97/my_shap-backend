import { Request, Response } from 'express';
import { CreateNotificationUseCase } from '../../application/use-cases/notification.use-cases/create-notification.use-case';
import { GetAllNotificationsUseCase } from '../../application/use-cases/notification.use-cases/get-all-notifications.use-case';
import { GetNotificationByIdUseCase } from '../../application/use-cases/notification.use-cases/get-notification-by-id.use-case';
import { DeleteNotificationUseCase } from '../../application/use-cases/notification.use-cases/delete-notification.use-case';
import { UpdateNotificationUseCase } from '../../application/use-cases/notification.use-cases/update-notification.use-case';
import { FindNotificationsByUserIdUseCase } from '../../application/use-cases/notification.use-cases/find-notifications-by-user-id.use-case';
import { MarkNotificationAsReadUseCase } from '../../application/use-cases/notification.use-cases/mark-notification-as-read.use-case';
import { inject, injectable } from 'inversify';

@injectable()
export class NotificationController {
    constructor(
        @inject(CreateNotificationUseCase) private createNotificationUseCase: CreateNotificationUseCase,
        @inject(GetAllNotificationsUseCase) private getAllNotificationsUseCase: GetAllNotificationsUseCase,
        @inject(GetNotificationByIdUseCase) private getNotificationByIdUseCase: GetNotificationByIdUseCase,
        @inject(DeleteNotificationUseCase) private deleteNotificationUseCase: DeleteNotificationUseCase,
        @inject(UpdateNotificationUseCase) private updateNotificationUseCase: UpdateNotificationUseCase,
        @inject(FindNotificationsByUserIdUseCase) private findNotificationsByUserIdUseCase: FindNotificationsByUserIdUseCase,
        @inject(MarkNotificationAsReadUseCase) private markNotificationAsReadUseCase: MarkNotificationAsReadUseCase
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

    public async getNotificationById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const notification = await this.getNotificationByIdUseCase.execute(id);
            if (notification) {
                res.status(200).json(notification);
            } else {
                res.status(404).json({ error: 'Notification not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async deleteNotification(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const success = await this.deleteNotificationUseCase.execute(id);
            if (success) {
                res.status(200).json({ message: 'Notification deleted successfully' });
            } else {
                res.status(404).json({ error: 'Notification not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async updateNotification(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const notificationData = req.body;
            const updatedNotification = await this.updateNotificationUseCase.execute(id, notificationData);
            if (updatedNotification) {
                res.status(200).json(updatedNotification);
            } else {
                res.status(404).json({ error: 'Notification not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async findNotificationsByUserId(req: Request, res: Response): Promise<void> {
        try {
            const userId = parseInt(req.params.userId, 10);
            const notifications = await this.findNotificationsByUserIdUseCase.execute(userId);
            res.status(200).json(notifications);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async markNotificationAsRead(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const success = await this.markNotificationAsReadUseCase.execute(id);
            if (success) {
                res.status(200).json({ message: 'Notification marked as read' });
            } else {
                res.status(404).json({ error: 'Notification not found' });
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
