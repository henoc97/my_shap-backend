import { CreateNotificationUseCase } from "../../use-cases/notification.use-cases/create-notification.use-case";
import { DeleteNotificationUseCase } from "../../use-cases/notification.use-cases/delete-notification.use-case";
import { GetAllNotificationsUseCase } from "../../use-cases/notification.use-cases/get-all-notifications.use-case";
import { GetNotificationByIdUseCase } from "../../use-cases/notification.use-cases/get-notification-by-id.use-case";
import { UpdateNotificationUseCase } from "../../use-cases/notification.use-cases/update-notification.use-case";
import { FindNotificationsByUserIdUseCase } from "../../use-cases/notification.use-cases/find-notifications-by-user-id.use-case";
import { MarkNotificationAsReadUseCase } from "../../use-cases/notification.use-cases/mark-notification-as-read.use-case";
import { container } from "../repositories.container";

container.bind<CreateNotificationUseCase>(CreateNotificationUseCase).toSelf();
container.bind<DeleteNotificationUseCase>(DeleteNotificationUseCase).toSelf();
container.bind<GetAllNotificationsUseCase>(GetAllNotificationsUseCase).toSelf();
container.bind<GetNotificationByIdUseCase>(GetNotificationByIdUseCase).toSelf();
container.bind<UpdateNotificationUseCase>(UpdateNotificationUseCase).toSelf();
container.bind<FindNotificationsByUserIdUseCase>(FindNotificationsByUserIdUseCase).toSelf();
container.bind<MarkNotificationAsReadUseCase>(MarkNotificationAsReadUseCase).toSelf();

