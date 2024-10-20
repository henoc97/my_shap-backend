import { Notification } from "../../../domain/entities/notification.entity";
import { NotificationDTO } from "../../../presentation/dtos/notification.dto";


export function toNotificationDTO(entity: Notification): NotificationDTO {
  return new NotificationDTO(
    entity.id,
    entity.userId,
    entity.message,
    entity.isRead,
    entity.createdAt
  );
}
