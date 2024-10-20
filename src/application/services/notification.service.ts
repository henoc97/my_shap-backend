import { INotificationRepository } from "../../domain/repositories/notification.repository";
import { Notification } from "../../domain/entities/notification.entity";


export class NotificationService {
    constructor(private notificationRepository: INotificationRepository) {}

    async createNotification(notification: Notification): Promise<Notification> {
        return this.notificationRepository.create(notification);
    }

    async getAllNotifications(): Promise<Notification[]> {
        return this.notificationRepository.getAll();
    }

    async getNotificationById(id: number): Promise<Notification | null> {
        return this.notificationRepository.getById(id);
    }

    async updateNotification(id: number, notification: Partial<Notification>): Promise<Notification | null> {
        return this.notificationRepository.update(id, notification);
    }

    async deleteNotification(id: number): Promise<boolean> {
        return this.notificationRepository.delete(id);
    }

    async findNotificationsByUserId(userId: number): Promise<Notification[]> {
        return this.notificationRepository.findByUserId(userId);
    }

    async markNotificationAsRead(id: number): Promise<boolean> {
        return this.notificationRepository.markAsRead(id);
    }
}