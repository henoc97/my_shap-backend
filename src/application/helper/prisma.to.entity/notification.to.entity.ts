import { Notification } from "../../../domain/entities/notification.entity";

export function toNotificationEntity(dto: any): Notification {
  return new Notification(
    dto.id,
    dto.userId,
    dto.message,
    dto.isRead
  );
}
