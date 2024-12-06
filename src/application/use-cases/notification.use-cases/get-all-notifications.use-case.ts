import { Notification } from "../../../domain/entities/notification.entity";
import { NotificationService } from "../../services/notification.service";
import { injectable, inject } from "inversify";
import TYPES from "../../containers/types/types";

@injectable()
export class GetAllNotificationsUseCase {
    constructor(@inject(TYPES.NotificationService) private notificationService: NotificationService) { }

    /**
     * Executes the use case to retrieve all notifications.
     * @returns A list of notifications.
     */
    async execute(): Promise<Notification[]> {
        return this.notificationService.getAllNotifications();
    }
}
