import { NotificationDTO } from "../../../presentation/dtos/notification.dto";
import { Notification } from "../../../domain/entities/notification.entity";
import { User } from "../../../domain/entities/user.entity";
import { Role } from "../../../domain/enums/role.enum";

export function toNotificationEntity(dto: NotificationDTO): Notification {
  return new Notification(
    dto.id,
    dto.userId,
    dto.message,
    dto.isRead
  );
}
