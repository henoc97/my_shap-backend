"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_user_use_case_1 = require("../../use-cases/user.use-cases/create-user.use-case");
const delete_user_use_case_1 = require("../../use-cases/user.use-cases/delete-user.use-case");
const get_all_users_use_case_1 = require("../../use-cases/user.use-cases/get-all-users.use-case");
const get_user_by_id_use_case_1 = require("../../use-cases/user.use-cases/get-user-by-id.use-case");
const update_user_use_case_1 = require("../../use-cases/user.use-cases/update-user.use-case");
const find_user_by_email_use_case_1 = require("../../use-cases/user.use-cases/find-user-by-email.use-case");
const find_active_users_use_case_1 = require("../../use-cases/user.use-cases/find-active-users.use-case");
const repositories_container_1 = require("../repositories.container");
repositories_container_1.container.bind(create_user_use_case_1.CreateUserUseCase).toSelf();
repositories_container_1.container.bind(delete_user_use_case_1.DeleteUserUseCase).toSelf();
repositories_container_1.container.bind(get_all_users_use_case_1.GetAllUsersUseCase).toSelf();
repositories_container_1.container.bind(get_user_by_id_use_case_1.GetUserByIdUseCase).toSelf();
repositories_container_1.container.bind(update_user_use_case_1.UpdateUserUseCase).toSelf();
repositories_container_1.container.bind(find_user_by_email_use_case_1.FindUserByEmailUseCase).toSelf();
repositories_container_1.container.bind(find_active_users_use_case_1.FindActiveUsersUseCase).toSelf();
console.log("Teste : ");
console.log(repositories_container_1.container.isBound(create_user_use_case_1.CreateUserUseCase)); // Cela doit retourner 'true'
console.log("Vérification des liaisons :");
console.log(repositories_container_1.container.isBound(create_user_use_case_1.CreateUserUseCase)); // Cela doit retourner 'true'
console.log(repositories_container_1.container.isBound(delete_user_use_case_1.DeleteUserUseCase)); // Cela doit retourner 'true'
// Ajoutez d'autres vérifications si nécessaire
