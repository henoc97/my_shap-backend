import { NotificationService } from "../../services/notification.service";
import { injectable, inject } from "inversify";
import TYPES from "../../containers/types/types";

@injectable()
export class DeleteNotificationUseCase {
    constructor(@inject(TYPES.NotificationService) private notificationService: NotificationService) { }

    /**
     * Executes the use case to delete a notification.
     * @param id - The ID of the notification.
     * @returns True if the notification was deleted, false otherwise.
     */
    async execute(id: number): Promise<boolean> {
        return this.notificationService.deleteNotification(id);
    }
}
