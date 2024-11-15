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
    FindActiveUsersUseCase: Symbol.for("FindActiveUsersUseCase")
};

export default TYPES;