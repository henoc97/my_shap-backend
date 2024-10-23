import { container } from './repositories.container';
import { AgentController } from '../../presentation/controllers/agent.controller';
import { AdminController } from '../../presentation/controllers/admin.controller';
import { UserController } from '../../presentation/controllers/user.controller';
import { TransactionController } from '../../presentation/controllers/transaction.controller';
import { NotificationController } from '../../presentation/controllers/notification.controller';
import { TransferController } from '../../presentation/controllers/transfer.controller';
import { FeeController } from '../../presentation/controllers/fee.controller';

// Enregistrement des contrôleurs dans le conteneur
container.bind(AgentController).toSelf();
container.bind(AdminController).toSelf();
container.bind(UserController).toSelf();
container.bind(TransactionController).toSelf();
container.bind(NotificationController).toSelf();
container.bind(TransferController).toSelf();
container.bind(FeeController).toSelf();

