import { CreateUserUseCase } from "../../use-cases/user.use-cases/create-user.use-case";
import { DeleteUserUseCase } from "../../use-cases/user.use-cases/delete-user.use-case";
import { GetAllUsersUseCase } from "../../use-cases/user.use-cases/get-all-users.use-case";
import { GetUserByIdUseCase } from "../../use-cases/user.use-cases/get-user-by-id.use-case";
import { UpdateUserUseCase } from "../../use-cases/user.use-cases/update-user.use-case";
import { FindUserByEmailUseCase } from "../../use-cases/user.use-cases/find-user-by-email.use-case";
import { FindActiveUsersUseCase } from "../../use-cases/user.use-cases/find-active-users.use-case";
import { container } from "../repositories.container";

container.bind<CreateUserUseCase>(CreateUserUseCase).toSelf();
container.bind<DeleteUserUseCase>(DeleteUserUseCase).toSelf();
container.bind<GetAllUsersUseCase>(GetAllUsersUseCase).toSelf();
container.bind<GetUserByIdUseCase>(GetUserByIdUseCase).toSelf();
container.bind<UpdateUserUseCase>(UpdateUserUseCase).toSelf();
container.bind<FindUserByEmailUseCase>(FindUserByEmailUseCase).toSelf();
container.bind<FindActiveUsersUseCase>(FindActiveUsersUseCase).toSelf();

console.log("Teste : ");
console.log(container.isBound(CreateUserUseCase));  // Cela doit retourner 'true'

console.log("Vérification des liaisons :");
console.log(container.isBound(CreateUserUseCase));  // Cela doit retourner 'true'
console.log(container.isBound(DeleteUserUseCase));  // Cela doit retourner 'true'
// Ajoutez d'autres vérifications si nécessaire

