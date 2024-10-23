import { NotificationService } from "../../services/notification.service";
import { injectable } from "inversify";

@injectable()
export class DeleteNotificationUseCase {
    constructor(private notificationService: NotificationService) {}

    /**
     * Executes the use case to delete a notification.
     * @param id - The ID of the notification.
     * @returns True if the notification was deleted, false otherwise.
     */
    async execute(id: number): Promise<boolean> {
        return this.notificationService.deleteNotification(id);
    }
}
