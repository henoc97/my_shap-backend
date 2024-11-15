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
    container.bind<AgentController>(AgentController).toSelf();
    container.bind<AdminController>(AdminController).toSelf();
    container.bind<UserController>(TYPES.UserController).to(UserController);
    container.bind<TransactionController>(TransactionController).toSelf();
    container.bind<NotificationController>(NotificationController).toSelf();
    container.bind<TransferController>(TransferController).toSelf();
    container.bind<FeeController>(FeeController).toSelf();
}

export default bindControllers;