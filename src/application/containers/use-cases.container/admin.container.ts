import { CreateAdminUseCase } from "../../use-cases/admin.use-cases/create-admin.use-case";
import { DeleteAdminUseCase } from "../../use-cases/admin.use-cases/delete-admin.use-case";
import { GetAllAdminsUseCase } from "../../use-cases/admin.use-cases/get-all-admins.use-case";
import { GetAdminByIdUseCase } from "../../use-cases/admin.use-cases/get-admin-by-id.use-case";
import { UpdateAdminUseCase } from "../../use-cases/admin.use-cases/update-admin.use-case";
import { FindAdminByUserIdUseCase } from "../../use-cases/admin.use-cases/find-admin-by-user-id.use-case";
import { Container } from "inversify";
import TYPES from "../types/types";




function bindAdminUseCase(container: Container) {

    container.bind<CreateAdminUseCase>(TYPES.CreateAdminUseCase).to(CreateAdminUseCase);
    container.bind<DeleteAdminUseCase>(TYPES.DeleteAdminUseCase).to(DeleteAdminUseCase);
    container.bind<GetAllAdminsUseCase>(TYPES.GetAllAdminsUseCase).to(GetAllAdminsUseCase);
    container.bind<GetAdminByIdUseCase>(TYPES.GetAdminByIdUseCase).to(GetAdminByIdUseCase);
    container.bind<UpdateAdminUseCase>(TYPES.UpdateAdminUseCase).to(UpdateAdminUseCase);
    container.bind<FindAdminByUserIdUseCase>(TYPES.FindAdminByUserIdUseCase).to(FindAdminByUserIdUseCase);
}

export default bindAdminUseCase;