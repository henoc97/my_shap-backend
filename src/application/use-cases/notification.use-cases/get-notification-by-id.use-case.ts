import { Notification } from "../../../domain/entities/notification.entity";
import { NotificationService } from "../../services/notification.service";

export class GetNotificationByIdUseCase {
    constructor(private notificationService: NotificationService) {}

    /**
     * Executes the use case to retrieve a notification by its ID.
     * @param id - The ID of the notification.
     * @returns The notification or null if not found.
     */
    async execute(id: number): Promise<Notification | null> {
        return this.notificationService.getNotificationById(id);
    }
}
