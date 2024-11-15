import { UserService } from "../services/user.service";
import { AdminService } from "../services/admin.service";
import { AgentService } from "../services/agent.service";
import { FeeService } from "../services/fee.service";
import { NotificationService } from "../services/notification.service";
import { TransactionService } from "../services/transaction.service";
import { TransferService } from "../services/transfer.service";
import TYPES from "./types/types";
import { Container } from "inversify";


function bindService(container: Container) {

    container.bind<UserService>(TYPES.UserService).to(UserService).inSingletonScope();
    container.bind<AdminService>(AdminService).toSelf().inSingletonScope();
    container.bind<AgentService>(AgentService).toSelf().inSingletonScope();
    container.bind<FeeService>(FeeService).toSelf().inSingletonScope();
    container.bind<NotificationService>(NotificationService).toSelf().inSingletonScope();
    container.bind<TransactionService>(TransactionService).toSelf().inSingletonScope();
    container.bind<TransferService>(TransferService).toSelf().inSingletonScope();
}

export default bindService;