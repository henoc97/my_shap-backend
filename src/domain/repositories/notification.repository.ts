import { Notification } from "../entities/notification.entity";

export interface INotificationRepository {
    create(notification: Notification): Promise<Notification>;
    getAll(): Promise<Notification[]>;
    getById(id: number): Promise<Notification | null>;
    update(id: number, notification: Partial<Notification>): Promise<Notification | null>;
    delete(id: number): Promise<boolean>;
    findByUserId(userId: number): Promise<Notification[]>;
    markAsRead(id: number): Promise<boolean>;
}
