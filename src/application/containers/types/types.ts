// types.ts
const TYPES = {
    IUserRepository: Symbol.for("IUserRepository"),
    UserRepository: Symbol.for("UserRepository"),
    UserService: Symbol.for("UserService"),
    UserController: Symbol.for("UserController"),
    CreateUserUseCase: Symbol.for("CreateUserUseCase"),
    DeleteUserUseCase: Symbol.for("DeleteUserUseCase"),
    GetAllUsersUseCase: Symbol.for("GetAllUsersUseCase"),
    GetUserByIdUseCase: Symbol.for("GetUserByIdUseCase"),
    UpdateUserUseCase: Symbol.for("UpdateUserUseCase"),
    FindUserByEmailUseCase: Symbol.for("FindUserByEmailUseCase"),
    IsUserByContactUseCase: Symbol.for("IsUserByContactUseCase"),
    FindActiveUsersUseCase: Symbol.for("FindActiveUsersUseCase"),

    // Transfer
    ITransferRepository: Symbol.for("ITransferRepository"),
    TransferRepository: Symbol.for("TransferRepository"),
    TransferService: Symbol.for("TransferService"),
    TransferController: Symbol.for("TransferController"),
    CreateTransferUseCase: Symbol.for("CreateTransferUseCase"),
    GetAllTransfersUseCase: Symbol.for("GetAllTransfersUseCase"),
    GetTransferByIdUseCase: Symbol.for("GetTransferByIdUseCase"),
    FindTransfersByStatusUseCase: Symbol.for("FindTransfersByStatusUseCase"),
    FindTransfersByReceiverIdUseCase: Symbol.for("FindTransfersByReceiverIdUseCase"),
    FindTransfersBySenderIdUseCase: Symbol.for("FindTransfersBySenderIdUseCase"),
    UpdateTransferUseCase: Symbol.for("UpdateTransferUseCase"),
    DeleteTransferUseCase: Symbol.for("DeleteTransferUseCase"),

    // Transaction
    ITransactionRepository: Symbol.for("ITransactionRepository"),
    TransactionRepository: Symbol.for("TransactionRepository"),
    TransactionService: Symbol.for("TransactionService"),
    TransactionController: Symbol.for("TransactionController"),
    CreateTransactionUseCase: Symbol.for("CreateTransactionUseCase"),
    DeleteTransactionUseCase: Symbol.for("DeleteTransactionUseCase"),
    GetAllTransactionsUseCase: Symbol.for("GetAllTransactionsUseCase"),
    GetTransactionByIdUseCase: Symbol.for("GetTransactionByIdUseCase"),
    UpdateTransactionUseCase: Symbol.for("UpdateTransactionUseCase"),
    FindTransactionsByUserIdUseCase: Symbol.for("FindTransactionsByUserIdUseCase"),
    FindTransactionsByTypeUseCase: Symbol.for("FindTransactionsByTypeUseCase"),

    // Notification
    INotificatioRepository: Symbol.for("INotificatioRepository"),
    NotificatioRepository: Symbol.for("NotificatioRepository"),
    NotificatioService: Symbol.for("NotificatioService"),
    NotificatioController: Symbol.for("NotificatioController"),
    CreateNotificationUseCase: Symbol.for("CreateNotificationUseCase"),
    DeleteNotificationUseCase: Symbol.for("DeleteNotificationUseCase"),
    GetAllNotificationsUseCase: Symbol.for("GetAllNotificationsUseCase"),
    GetNotificationByIdUseCase: Symbol.for("GetNotificationByIdUseCase"),
    UpdateNotificationUseCase: Symbol.for("UpdateNotificationUseCase"),
    FindNotificationsByUserIdUseCase: Symbol.for("FindNotificationsByUserIdUseCase"),
    MarkNotificationAsReadUseCase: Symbol.for("MarkNotificationAsReadUseCase"),
};

export default TYPES;