import { Notification } from "../../../domain/entities/notification.entity";
import { NotificationService } from "../../services/notification.service";
import { injectable } from "inversify";

@injectable()
export class FindNotificationsByUserIdUseCase {
    constructor(private notificationService: NotificationService) {}

    /**
     * Executes the use case to find notifications by user ID.
     * @param userId - The user ID.
     * @returns A list of notifications for the user.
     */
    async execute(userId: number): Promise<Notification[]> {
        return this.notificationService.findNotificationsByUserId(userId);
    }
}
