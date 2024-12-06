import { CreateNotificationUseCase } from "../../use-cases/notification.use-cases/create-notification.use-case";
import { DeleteNotificationUseCase } from "../../use-cases/notification.use-cases/delete-notification.use-case";
import { GetAllNotificationsUseCase } from "../../use-cases/notification.use-cases/get-all-notifications.use-case";
import { GetNotificationByIdUseCase } from "../../use-cases/notification.use-cases/get-notification-by-id.use-case";
import { UpdateNotificationUseCase } from "../../use-cases/notification.use-cases/update-notification.use-case";
import { FindNotificationsByUserIdUseCase } from "../../use-cases/notification.use-cases/find-notifications-by-user-id.use-case";
import { MarkNotificationAsReadUseCase } from "../../use-cases/notification.use-cases/mark-notification-as-read.use-case";
import { Container } from "inversify";
import TYPES from "../types/types";


function bindNotificationUseCase(container: Container) {

    container.bind<CreateNotificationUseCase>(TYPES.CreateNotificationUseCase).to(CreateNotificationUseCase);
    container.bind<DeleteNotificationUseCase>(TYPES.DeleteNotificationUseCase).to(DeleteNotificationUseCase);
    container.bind<GetAllNotificationsUseCase>(TYPES.GetAllNotificationsUseCase).to(GetAllNotificationsUseCase);
    container.bind<GetNotificationByIdUseCase>(TYPES.GetNotificationByIdUseCase).to(GetNotificationByIdUseCase);
    container.bind<UpdateNotificationUseCase>(TYPES.UpdateNotificationUseCase).to(UpdateNotificationUseCase);
    container.bind<FindNotificationsByUserIdUseCase>(TYPES.FindNotificationsByUserIdUseCase).to(FindNotificationsByUserIdUseCase);
    container.bind<MarkNotificationAsReadUseCase>(TYPES.MarkNotificationAsReadUseCase).to(MarkNotificationAsReadUseCase);
}

export default bindNotificationUseCase;