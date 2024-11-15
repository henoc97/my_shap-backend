import { CreateFeeUseCase } from "../../use-cases/fee.use-cases/create-fee.use-case";
import { DeleteFeeUseCase } from "../../use-cases/fee.use-cases/delete-fee.use-case";
import { GetFeeByIdUseCase } from "../../use-cases/fee.use-cases/get-fee-by-id.use-case";
import { UpdateFeeUseCase } from "../../use-cases/fee.use-cases/update-fee.use-case";
import { FindFeeByTransactionIdUseCase } from "../../use-cases/fee.use-cases/find-fee-by-transaction-id.use-case";
import { Container } from "inversify";



function bindFeeUseCase(container: Container) {

    container.bind<CreateFeeUseCase>(CreateFeeUseCase).toSelf();
    container.bind<DeleteFeeUseCase>(DeleteFeeUseCase).toSelf();
    container.bind<GetFeeByIdUseCase>(GetFeeByIdUseCase).toSelf();
    container.bind<UpdateFeeUseCase>(UpdateFeeUseCase).toSelf();
    container.bind<FindFeeByTransactionIdUseCase>(FindFeeByTransactionIdUseCase).toSelf();
}

export default bindFeeUseCase;