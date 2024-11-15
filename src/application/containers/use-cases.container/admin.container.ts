import { CreateAdminUseCase } from "../../use-cases/admin.use-cases/create-admin.use-case";
import { DeleteAdminUseCase } from "../../use-cases/admin.use-cases/delete-admin.use-case";
import { GetAllAdminsUseCase } from "../../use-cases/admin.use-cases/get-all-admins.use-case";
import { GetAdminByIdUseCase } from "../../use-cases/admin.use-cases/get-admin-by-id.use-case";
import { UpdateAdminUseCase } from "../../use-cases/admin.use-cases/update-admin.use-case";
import { FindAdminByUserIdUseCase } from "../../use-cases/admin.use-cases/find-admin-by-user-id.use-case";
import { Container } from "inversify";




function bindAdminUseCase(container: Container) {

    container.bind<CreateAdminUseCase>(CreateAdminUseCase).toSelf();
    container.bind<DeleteAdminUseCase>(DeleteAdminUseCase).toSelf();
    container.bind<GetAllAdminsUseCase>(GetAllAdminsUseCase).toSelf();
    container.bind<GetAdminByIdUseCase>(GetAdminByIdUseCase).toSelf();
    container.bind<UpdateAdminUseCase>(UpdateAdminUseCase).toSelf();
    container.bind<FindAdminByUserIdUseCase>(FindAdminByUserIdUseCase).toSelf();
}

export default bindAdminUseCase;