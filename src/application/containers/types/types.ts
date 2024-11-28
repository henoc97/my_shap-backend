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
};

export default TYPES;