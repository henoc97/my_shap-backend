import { INotificationRepository } from '../../domain/repositories/notification.repository';
import { Notification } from '../../domain/entities/notification.entity';
import prisma from '../../../prisma/prisma.service';
import { toNotificationEntity } from '../../application/helper/prisma.to.entity/notification.to.entity';
import { injectable } from 'inversify';

@injectable()
export class NotificationRepositoryImpl implements INotificationRepository {
  async create(notification: Notification): Promise<Notification> {
    try {
      const { id, user, ...notificationData } = notification;
      const result = await prisma.notification.create({ data: notificationData });
      return toNotificationEntity(result);
    } catch (error) {
      console.error('Error creating notification:', error);
      throw error;
    }
  }

  async getAll(): Promise<Notification[]> {
    try {
      const result = await prisma.notification.findMany();
      return result.map(toNotificationEntity);
    } catch (error) {
      console.error('Error getting all notifications:', error);
      throw error;
    }
  }

  async getById(id: number): Promise<Notification | null> {
    try {
      const result = await prisma.notification.findUnique({ where: { id } });
      return toNotificationEntity(result);
    } catch (error) {
      console.error('Error getting notification by ID:', error);
      throw error;
    }
  }

  async update(id: number, notification: Partial<Notification>): Promise<Notification | null> {
    try {
      const { user, ...notificationData } = notification;
      const result = await prisma.notification.update({ where: { id }, data: notificationData });
      return toNotificationEntity(result);
    } catch (error) {
      console.error('Error updating notification:', error);
      throw error;
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      await prisma.notification.delete({ where: { id } });
      return true;
    } catch (error) {
      console.error('Error deleting notification:', error);
      return false;
    }
  }

  async findByUserId(userId: number): Promise<Notification[]> {
    try {
      const result = await prisma.notification.findMany({ where: { userId } });
      return result.map(toNotificationEntity);
    } catch (error) {
      console.error('Error finding notifications by user ID:', error);
      throw error;
    }
  }

  async markAsRead(id: number): Promise<boolean> {
    try {
      await prisma.notification.update({ where: { id }, data: { isRead: true } });
      return true;
    } catch (error) {
      console.error('Error marking notification as read:', error);
      return false;
    }
  }
}
