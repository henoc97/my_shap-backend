import { Notification } from "../../../domain/entities/notification.entity";
import { NotificationService } from "../../services/notification.service";
import { injectable, inject } from "inversify";
import TYPES from "../../containers/types/types";

@injectable()
export class UpdateNotificationUseCase {
    constructor(@inject(TYPES.NotificationService) private notificationService: NotificationService) { }

    /**
     * Executes the use case to update a notification.
     * @param id - The ID of the notification.
     * @param notificationData - The data to update the notification with.
     * @returns The updated notification or null if not found.
     */
    async execute(id: number, notificationData: Partial<Notification>): Promise<Notification | null> {
        return this.notificationService.updateNotification(id, notificationData);
    }
}
