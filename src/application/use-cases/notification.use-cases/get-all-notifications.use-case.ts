import { Notification } from "../../../domain/entities/notification.entity";
import { NotificationService } from "../../services/notification.service";
import { injectable } from "inversify";

@injectable()
export class GetAllNotificationsUseCase {
    constructor(private notificationService: NotificationService) {}

    /**
     * Executes the use case to retrieve all notifications.
     * @returns A list of notifications.
     */
    async execute(): Promise<Notification[]> {
        return this.notificationService.getAllNotifications();
    }
}
