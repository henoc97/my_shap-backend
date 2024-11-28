import "reflect-metadata";
import { Container } from "inversify";
import bindIRepo from "./repositories.container";
import bindService from "./services.container";
import bindUserUseCase from "./use-cases.container/user.container";
import bindAdminUseCase from "./use-cases.container/admin.container";
import bindFeeUseCase from "./use-cases.container/fee.container";
import bindNotificationUseCase from "./use-cases.container/notification.container";
import bindAgentUseCase from "./use-cases.container/agent.container";
import bindTransctionUseCase from "./use-cases.container/transaction.container";
import bindTransferUseCase from "./use-cases.container/transfer.container";
import bindControllers from "./controller.container";

const container = new Container();

export function initContainer(): Container {
    bindIRepo(container);


    bindService(container);


    bindUserUseCase(container);

    bindAdminUseCase(container);

    bindFeeUseCase(container);

    bindNotificationUseCase(container);

    bindAgentUseCase(container);

    bindTransctionUseCase(container);

    bindTransferUseCase(container);


    bindControllers(container);


    return container;
}




// export * from "./repositories.container";
// // export * from { container } from './repositories.container';

// export * from "./services.container";
// export * from "./use-cases.container/main.use-cases.container";
// export * from "./controller.container";
// import { container } from "./controller.container";

// export { container };

/* REPOSITORIES */

// import "reflect-metadata";
// import { Container } from "inversify";
// import { IUserRepository } from "../../domain/repositories/user.repository";
// import { UserRepositoryImpl } from "../../infrastructure/persistence/user.repository.impl";
// import { AgentRepositoryImpl } from "../../infrastructure/persistence/agent.repository.impl";
// import { FeeRepositoryImpl } from "../../infrastructure/persistence/fee.repository.impl";
// import { TransactionRepositoryImpl } from "../../infrastructure/persistence/transaction.repository.impl";
// import { TransferRepositoryImpl } from "../../infrastructure/persistence/transfer.repository.impl";
// import { NotificationRepositoryImpl } from "../../infrastructure/persistence/notification.repository.impl";
// import { AdminRepositoryImpl } from "../../infrastructure/persistence/admin.repository.impl";
// import { IAgentRepository } from "../../domain/repositories/agent.repository";
// import { IFeeRepository } from "../../domain/repositories/fee.repository";
// import { INotificationRepository } from "../../domain/repositories/notification.repository";
// import { IAdminRepository } from "../../domain/repositories/admin.repository";
// import { ITransactionRepository } from "../../domain/repositories/transaction.repository";
// import { ITransferRepository } from "../../domain/repositories/transfer.repository";
// import TYPES from "./types/types";


// const container = new Container();

// container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepositoryImpl).inSingletonScope();
// container.bind<IAgentRepository>("IAgentRepository").to(AgentRepositoryImpl).inSingletonScope();
// container.bind<IFeeRepository>("IFeeRepository").to(FeeRepositoryImpl).inSingletonScope();
// container.bind<ITransactionRepository>("ITransactionRepository").to(TransactionRepositoryImpl).inSingletonScope();
// container.bind<ITransferRepository>("ITransferRepository").to(TransferRepositoryImpl).inSingletonScope();
// container.bind<INotificationRepository>("INotificationRepository").to(NotificationRepositoryImpl).inSingletonScope();
// container.bind<IAdminRepository>("IAdminRepository").to(AdminRepositoryImpl).inSingletonScope();

// // export { container };


// /* SERVICES */

// import { UserService } from "../services/user.service";
// import { AdminService } from "../services/admin.service";
// import { AgentService } from "../services/agent.service";
// import { FeeService } from "../services/fee.service";
// import { NotificationService } from "../services/notification.service";
// import { TransactionService } from "../services/transaction.service";
// import { TransferService } from "../services/transfer.service";
// // import { container } from "./repositories.container";
// // import TYPES from "./types/types";


// container.bind<UserService>(TYPES.UserService).to(UserService).inSingletonScope();
// container.bind<AdminService>(AdminService).toSelf().inSingletonScope();
// container.bind<AgentService>(AgentService).toSelf().inSingletonScope();
// container.bind<FeeService>(FeeService).toSelf().inSingletonScope();
// container.bind<NotificationService>(NotificationService).toSelf().inSingletonScope();
// container.bind<TransactionService>(TransactionService).toSelf().inSingletonScope();
// container.bind<TransferService>(TransferService).toSelf().inSingletonScope();



// /* USE-CASES */

// import { CreateUserUseCase } from "../use-cases/user.use-cases/create-user.use-case";
// import { DeleteUserUseCase } from "../use-cases/user.use-cases/delete-user.use-case";
// import { GetAllUsersUseCase } from "../use-cases/user.use-cases/get-all-users.use-case";
// import { GetUserByIdUseCase } from "../use-cases/user.use-cases/get-user-by-id.use-case";
// import { UpdateUserUseCase } from "../use-cases/user.use-cases/update-user.use-case";
// import { FindUserByEmailUseCase } from "../use-cases/user.use-cases/find-user-by-email.use-case";
// import { FindActiveUsersUseCase } from "../use-cases/user.use-cases/find-active-users.use-case";
// // import { container } from "../repositories.container";
// // import TYPES from "../types/types";

// container.bind<CreateUserUseCase>(TYPES.CreateUserUseCase).to(CreateUserUseCase);
// container.bind<DeleteUserUseCase>(TYPES.DeleteUserUseCase).to(DeleteUserUseCase);
// container.bind<GetAllUsersUseCase>(TYPES.GetAllUsersUseCase).to(GetAllUsersUseCase);
// container.bind<GetUserByIdUseCase>(TYPES.GetUserByIdUseCase).to(GetUserByIdUseCase);
// container.bind<UpdateUserUseCase>(TYPES.UpdateUserUseCase).to(UpdateUserUseCase);
// container.bind<FindUserByEmailUseCase>(TYPES.FindUserByEmailUseCase).to(FindUserByEmailUseCase);
// container.bind<FindActiveUsersUseCase>(TYPES.FindActiveUsersUseCase).to(FindActiveUsersUseCase);

// console.log("Teste : ");
// console.log(container.isBound(TYPES.CreateUserUseCase));  // Cela doit retourner 'true'

// console.log("Vérification des liaisons :");
// console.log(container.isBound(TYPES.CreateUserUseCase));  // Cela doit retourner 'true'
// console.log(container.isBound(TYPES.DeleteUserUseCase));  // Cela doit retourner 'true'
// // Ajoutez d'autres vérifications si nécessaire

// import { CreateAdminUseCase } from "../use-cases/admin.use-cases/create-admin.use-case";
// import { DeleteAdminUseCase } from "../use-cases/admin.use-cases/delete-admin.use-case";
// import { GetAllAdminsUseCase } from "../use-cases/admin.use-cases/get-all-admins.use-case";
// import { GetAdminByIdUseCase } from "../use-cases/admin.use-cases/get-admin-by-id.use-case";
// import { UpdateAdminUseCase } from "../use-cases/admin.use-cases/update-admin.use-case";
// import { FindAdminByUserIdUseCase } from "../use-cases/admin.use-cases/find-admin-by-user-id.use-case";
// // import { container } from "../repositories.container";


// container.bind<CreateAdminUseCase>(CreateAdminUseCase).toSelf();
// container.bind<DeleteAdminUseCase>(DeleteAdminUseCase).toSelf();
// container.bind<GetAllAdminsUseCase>(GetAllAdminsUseCase).toSelf();
// container.bind<GetAdminByIdUseCase>(GetAdminByIdUseCase).toSelf();
// container.bind<UpdateAdminUseCase>(UpdateAdminUseCase).toSelf();
// container.bind<FindAdminByUserIdUseCase>(FindAdminByUserIdUseCase).toSelf();


// import { CreateAgentUseCase } from "../use-cases/agent.use-cases/create-agent.use-case";
// import { DeleteAgentUseCase } from "../use-cases/agent.use-cases/delete-agent.use-case";
// import { GetAllAgentsUseCase } from "../use-cases/agent.use-cases/get-all-agents.use-case";
// import { GetAgentByIdUseCase } from "../use-cases/agent.use-cases/get-agent-by-id.use-case";
// import { UpdateAgentUseCase } from "../use-cases/agent.use-cases/update-agent.use-case";
// import { FindAgentByUserIdUseCase } from "../use-cases/agent.use-cases/find-agent-by-user-id.use-case";
// import { FindAgentsWithTransfersUseCase } from "../use-cases/agent.use-cases/find-agents-with-transfers.use-case";
// // import { container } from "../repositories.container";


// container.bind<CreateAgentUseCase>(CreateAgentUseCase).toSelf();
// container.bind<DeleteAgentUseCase>(DeleteAgentUseCase).toSelf();
// container.bind<GetAllAgentsUseCase>(GetAllAgentsUseCase).toSelf();
// container.bind<GetAgentByIdUseCase>(GetAgentByIdUseCase).toSelf();
// container.bind<UpdateAgentUseCase>(UpdateAgentUseCase).toSelf();
// container.bind<FindAgentByUserIdUseCase>(FindAgentByUserIdUseCase).toSelf();
// container.bind<FindAgentsWithTransfersUseCase>(FindAgentsWithTransfersUseCase).toSelf();


// import { CreateFeeUseCase } from "../use-cases/fee.use-cases/create-fee.use-case";
// import { DeleteFeeUseCase } from "../use-cases/fee.use-cases/delete-fee.use-case";
// import { GetFeeByIdUseCase } from "../use-cases/fee.use-cases/get-fee-by-id.use-case";
// import { UpdateFeeUseCase } from "../use-cases/fee.use-cases/update-fee.use-case";
// import { FindFeeByTransactionIdUseCase } from "../use-cases/fee.use-cases/find-fee-by-transaction-id.use-case";
// // import { container } from "../repositories.container";


// container.bind<CreateFeeUseCase>(CreateFeeUseCase).toSelf();
// container.bind<DeleteFeeUseCase>(DeleteFeeUseCase).toSelf();
// container.bind<GetFeeByIdUseCase>(GetFeeByIdUseCase).toSelf();
// container.bind<UpdateFeeUseCase>(UpdateFeeUseCase).toSelf();
// container.bind<FindFeeByTransactionIdUseCase>(FindFeeByTransactionIdUseCase).toSelf();


// import { CreateNotificationUseCase } from "../use-cases/notification.use-cases/create-notification.use-case";
// import { DeleteNotificationUseCase } from "../use-cases/notification.use-cases/delete-notification.use-case";
// import { GetAllNotificationsUseCase } from "../use-cases/notification.use-cases/get-all-notifications.use-case";
// import { GetNotificationByIdUseCase } from "../use-cases/notification.use-cases/get-notification-by-id.use-case";
// import { UpdateNotificationUseCase } from "../use-cases/notification.use-cases/update-notification.use-case";
// import { FindNotificationsByUserIdUseCase } from "../use-cases/notification.use-cases/find-notifications-by-user-id.use-case";
// import { MarkNotificationAsReadUseCase } from "../use-cases/notification.use-cases/mark-notification-as-read.use-case";
// // import { container } from "../repositories.container";

// container.bind<CreateNotificationUseCase>(CreateNotificationUseCase).toSelf();
// container.bind<DeleteNotificationUseCase>(DeleteNotificationUseCase).toSelf();
// container.bind<GetAllNotificationsUseCase>(GetAllNotificationsUseCase).toSelf();
// container.bind<GetNotificationByIdUseCase>(GetNotificationByIdUseCase).toSelf();
// container.bind<UpdateNotificationUseCase>(UpdateNotificationUseCase).toSelf();
// container.bind<FindNotificationsByUserIdUseCase>(FindNotificationsByUserIdUseCase).toSelf();
// container.bind<MarkNotificationAsReadUseCase>(MarkNotificationAsReadUseCase).toSelf();


// import { CreateTransactionUseCase } from "../use-cases/transaction.use-cases/create-transaction.use-case";
// import { DeleteTransactionUseCase } from "../use-cases/transaction.use-cases/delete-transaction.use-case";
// import { GetAllTransactionsUseCase } from "../use-cases/transaction.use-cases/get-all-transactions.use-case";
// import { GetTransactionByIdUseCase } from "../use-cases/transaction.use-cases/get-transaction-by-id.use-case";
// import { UpdateTransactionUseCase } from "../use-cases/transaction.use-cases/update-transaction.use-case";
// import { FindTransactionsByUserIdUseCase } from "../use-cases/transaction.use-cases/find-transactions-by-user-id.use-case";
// import { FindTransactionsByTypeUseCase } from "../use-cases/transaction.use-cases/find-transactions-by-type.use-case";
// // import { container } from "../repositories.container";

// container.bind<CreateTransactionUseCase>(CreateTransactionUseCase).toSelf();
// container.bind<DeleteTransactionUseCase>(DeleteTransactionUseCase).toSelf();
// container.bind<GetAllTransactionsUseCase>(GetAllTransactionsUseCase).toSelf();
// container.bind<GetTransactionByIdUseCase>(GetTransactionByIdUseCase).toSelf();
// container.bind<UpdateTransactionUseCase>(UpdateTransactionUseCase).toSelf();
// container.bind<FindTransactionsByUserIdUseCase>(FindTransactionsByUserIdUseCase).toSelf();
// container.bind<FindTransactionsByTypeUseCase>(FindTransactionsByTypeUseCase).toSelf();


// import { CreateTransferUseCase } from "../use-cases/transfer.use-cases/create-transfer.use-case";
// import { DeleteTransferUseCase } from "../use-cases/transfer.use-cases/delete-transfer.use-case";
// import { GetAllTransfersUseCase } from "../use-cases/transfer.use-cases/get-all-transfers.use-case";
// import { GetTransferByIdUseCase } from "../use-cases/transfer.use-cases/get-transfer-by-id.use-case";
// import { UpdateTransferUseCase } from "../use-cases/transfer.use-cases/update-transfer.use-case";
// import { FindTransfersByStatusUseCase } from "../use-cases/transfer.use-cases/find-transfers-by-status.use-case";
// import { FindTransfersBySenderIdUseCase } from "../use-cases/transfer.use-cases/find-transfers-by-sender-id.use-case";
// import { FindTransfersByReceiverIdUseCase } from "../use-cases/transfer.use-cases/find-transfers-by-receiver-id.use-case";
// // import { container } from "../repositories.container";

// container.bind<CreateTransferUseCase>(CreateTransferUseCase).toSelf();
// container.bind<DeleteTransferUseCase>(DeleteTransferUseCase).toSelf();
// container.bind<GetAllTransfersUseCase>(GetAllTransfersUseCase).toSelf();
// container.bind<GetTransferByIdUseCase>(GetTransferByIdUseCase).toSelf();
// container.bind<UpdateTransferUseCase>(UpdateTransferUseCase).toSelf();
// container.bind<FindTransfersByStatusUseCase>(FindTransfersByStatusUseCase).toSelf();
// container.bind<FindTransfersBySenderIdUseCase>(FindTransfersBySenderIdUseCase).toSelf();
// container.bind<FindTransfersByReceiverIdUseCase>(FindTransfersByReceiverIdUseCase).toSelf();


// /* CONTROLLER */

// // import { container } from './repositories.container';
// import { AgentController } from '../../presentation/controllers/agent.controller';
// import { AdminController } from '../../presentation/controllers/admin.controller';
// import { UserController } from '../../presentation/controllers/user.controller';
// import { TransactionController } from '../../presentation/controllers/transaction.controller';
// import { NotificationController } from '../../presentation/controllers/notification.controller';
// import { TransferController } from '../../presentation/controllers/transfer.controller';
// import { FeeController } from '../../presentation/controllers/fee.controller';
// // import TYPES from './types/types'

// // Enregistrement des contrôleurs dans le conteneur
// container.bind<AgentController>(AgentController).toSelf();
// container.bind<AdminController>(AdminController).toSelf();
// container.bind<UserController>(TYPES.UserController).to(UserController);
// container.bind<TransactionController>(TransactionController).toSelf();
// container.bind<NotificationController>(NotificationController).toSelf();  // Ajout de la liaison pour NotificationController
// container.bind<TransferController>(TransferController).toSelf();
// container.bind<FeeController>(FeeController).toSelf();

// export { container }