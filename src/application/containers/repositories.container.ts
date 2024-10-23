import "reflect-metadata";
import { Container } from "inversify";
import { IUserRepository } from "../../domain/repositories/user.repository";
import { UserRepositoryImpl } from "../../infrastructure/persistence/user.repository.impl";
import { AgentRepositoryImpl } from "../../infrastructure/persistence/agent.repository.impl";
import { FeeRepositoryImpl } from "../../infrastructure/persistence/fee.repository.impl";
import { TransactionRepositoryImpl } from "../../infrastructure/persistence/transaction.repository.impl";
import { TransferRepositoryImpl } from "../../infrastructure/persistence/transfer.repository.impl";
import { NotificationRepositoryImpl } from "../../infrastructure/persistence/notification.repository.impl";
import { AdminRepositoryImpl } from "../../infrastructure/persistence/admin.repository.impl";
import { IAgentRepository } from "../../domain/repositories/agent.repository";
import { IFeeRepository } from "../../domain/repositories/fee.repository";
import { INotificationRepository } from "../../domain/repositories/notification.repository";
import { IAdminRepository } from "../../domain/repositories/admin.repository";
import { ITransactionRepository } from "../../domain/repositories/transaction.repository";
import { ITransferRepository } from "../../domain/repositories/transfer.repository";


const container = new Container();

container.bind<IUserRepository>("IUserRepository").to(UserRepositoryImpl).inSingletonScope();
container.bind<IAgentRepository>("IAgentRepository").to(AgentRepositoryImpl).inSingletonScope();
container.bind<IFeeRepository>("IFeeRepository").to(FeeRepositoryImpl).inSingletonScope();
container.bind<ITransactionRepository>("ITransactionRepository").to(TransactionRepositoryImpl).inSingletonScope();
container.bind<ITransferRepository>("ITransferRepository").to(TransferRepositoryImpl).inSingletonScope();
container.bind<INotificationRepository>("INotificationRepository").to(NotificationRepositoryImpl).inSingletonScope();
container.bind<IAdminRepository>("IAdminRepository").to(AdminRepositoryImpl).inSingletonScope();

export { container };