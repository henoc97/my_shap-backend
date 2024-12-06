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
    container.bind<AdminService>(TYPES.AdminService).to(AdminService).inSingletonScope();
    container.bind<AgentService>(TYPES.AgentService).to(AgentService).inSingletonScope();
    container.bind<FeeService>(TYPES.FeeService).to(FeeService).inSingletonScope();
    container.bind<NotificationService>(TYPES.NotificationService).to(NotificationService).inSingletonScope();
    container.bind<TransactionService>(TYPES.TransactionService).to(TransactionService).inSingletonScope();
    container.bind<TransferService>(TYPES.TransferService).to(TransferService).inSingletonScope();
}

export default bindService;