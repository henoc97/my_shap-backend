import { NotificationService } from "../../services/notification.service";
import { injectable, inject } from "inversify";
import TYPES from "../../containers/types/types";

@injectable()
export class MarkNotificationAsReadUseCase {
    constructor(@inject(TYPES.NotificationService) private notificationService: NotificationService) { }

    /**
     * Executes the use case to mark a notification as read.
     * @param id - The ID of the notification.
     * @returns True if the notification was marked as read, false otherwise.
     */
    async execute(id: number): Promise<boolean> {
        return this.notificationService.markNotificationAsRead(id);
    }
}
