import { UserService } from "../services/user.service";
import { AdminService } from "../services/admin.service";
import { AgentService } from "../services/agent.service";
import { FeeService } from "../services/fee.service";
import { NotificationService } from "../services/notification.service";
import { TransactionService } from "../services/transaction.service";
import { TransferService } from "../services/transfer.service";
import { container } from "./repositories.container";


container.bind(UserService).toSelf().inSingletonScope();
container.bind(AdminService).toSelf().inSingletonScope();
container.bind(AgentService).toSelf().inSingletonScope();
container.bind(FeeService).toSelf().inSingletonScope();
container.bind(NotificationService).toSelf().inSingletonScope();
container.bind(TransactionService).toSelf().inSingletonScope();
container.bind(TransferService).toSelf().inSingletonScope();

export { container };