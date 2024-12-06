import { CreateFeeUseCase } from "../../use-cases/fee.use-cases/create-fee.use-case";
import { DeleteFeeUseCase } from "../../use-cases/fee.use-cases/delete-fee.use-case";
import { GetFeeByIdUseCase } from "../../use-cases/fee.use-cases/get-fee-by-id.use-case";
import { UpdateFeeUseCase } from "../../use-cases/fee.use-cases/update-fee.use-case";
import { FindFeeByTransactionIdUseCase } from "../../use-cases/fee.use-cases/find-fee-by-transaction-id.use-case";
import { Container } from "inversify";
import TYPES from "../types/types";



function bindFeeUseCase(container: Container) {

    container.bind<CreateFeeUseCase>(TYPES.CreateFeeUseCase).to(CreateFeeUseCase);
    container.bind<DeleteFeeUseCase>(TYPES.DeleteFeeUseCase).to(DeleteFeeUseCase);
    container.bind<GetFeeByIdUseCase>(TYPES.GetFeeByIdUseCase).to(GetFeeByIdUseCase);
    container.bind<UpdateFeeUseCase>(TYPES.UpdateFeeUseCase).to(UpdateFeeUseCase);
    container.bind<FindFeeByTransactionIdUseCase>(TYPES.FindFeeByTransactionIdUseCase).to(FindFeeByTransactionIdUseCase);
}

export default bindFeeUseCase;