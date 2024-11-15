import { CreateUserUseCase } from "../../use-cases/user.use-cases/create-user.use-case";
import { DeleteUserUseCase } from "../../use-cases/user.use-cases/delete-user.use-case";
import { GetAllUsersUseCase } from "../../use-cases/user.use-cases/get-all-users.use-case";
import { GetUserByIdUseCase } from "../../use-cases/user.use-cases/get-user-by-id.use-case";
import { UpdateUserUseCase } from "../../use-cases/user.use-cases/update-user.use-case";
import { FindUserByEmailUseCase } from "../../use-cases/user.use-cases/find-user-by-email.use-case";
import { FindActiveUsersUseCase } from "../../use-cases/user.use-cases/find-active-users.use-case";
import TYPES from "../types/types";
import { Container } from "inversify";


function bindUserUseCase(container: Container) {
    try {
        container.bind<CreateUserUseCase>(TYPES.CreateUserUseCase).to(CreateUserUseCase);
        container.bind<DeleteUserUseCase>(TYPES.DeleteUserUseCase).to(DeleteUserUseCase);
        container.bind<GetAllUsersUseCase>(TYPES.GetAllUsersUseCase).to(GetAllUsersUseCase);
        container.bind<GetUserByIdUseCase>(TYPES.GetUserByIdUseCase).to(GetUserByIdUseCase);
        container.bind<UpdateUserUseCase>(TYPES.UpdateUserUseCase).to(UpdateUserUseCase);
        container.bind<FindUserByEmailUseCase>(TYPES.FindUserByEmailUseCase).to(FindUserByEmailUseCase);
        container.bind<FindActiveUsersUseCase>(TYPES.FindActiveUsersUseCase).to(FindActiveUsersUseCase);

    } catch (error) {
        console.log("erreur bindUserUseCase : " + error);
    }
}

export default bindUserUseCase;