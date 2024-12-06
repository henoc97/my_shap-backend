import { AgentController } from '../../presentation/controllers/agent.controller';
import { AdminController } from '../../presentation/controllers/admin.controller';
import { UserController } from '../../presentation/controllers/user.controller';
import { TransactionController } from '../../presentation/controllers/transaction.controller';
import { NotificationController } from '../../presentation/controllers/notification.controller';
import { TransferController } from '../../presentation/controllers/transfer.controller';
import { FeeController } from '../../presentation/controllers/fee.controller';
import TYPES from './types/types'
import { Container } from "inversify";


function bindControllers(container: Container) {

    // Enregistrement des contrôleurs dans le conteneur
    container.bind<AgentController>(TYPES.AgentController).to(AgentController);
    container.bind<AdminController>(TYPES.AdminController).to(AdminController);
    container.bind<UserController>(TYPES.UserController).to(UserController);
    container.bind<TransactionController>(TYPES.TransactionController).to(TransactionController);
    container.bind<NotificationController>(TYPES.NotificationController).to(NotificationController);
    container.bind<TransferController>(TYPES.TransferController).to(TransferController);
    container.bind<FeeController>(TYPES.FeeController).to(FeeController);
}

export default bindControllers;