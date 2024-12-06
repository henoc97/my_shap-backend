import { Notification } from "../../../domain/entities/notification.entity";
import { NotificationService } from "../../services/notification.service";
import { injectable, inject } from "inversify";
import TYPES from "../../containers/types/types";

@injectable()
export class CreateNotificationUseCase {
    constructor(@inject(TYPES.NotificationService) private notificationService: NotificationService) { }

    /**
     * Executes the use case to create a new notification.
     * @param notificationData - The data for the notification.
     * @returns The created notification.
     */
    async execute(notificationData: Notification): Promise<Notification> {
        return this.notificationService.createNotification(notificationData);
    }
}
