import { CreateTransferUseCase } from "../../use-cases/transfer.use-cases/create-transfer.use-case";
import { DeleteTransferUseCase } from "../../use-cases/transfer.use-cases/delete-transfer.use-case";
import { GetAllTransfersUseCase } from "../../use-cases/transfer.use-cases/get-all-transfers.use-case";
import { GetTransferByIdUseCase } from "../../use-cases/transfer.use-cases/get-transfer-by-id.use-case";
import { UpdateTransferUseCase } from "../../use-cases/transfer.use-cases/update-transfer.use-case";
import { FindTransfersByStatusUseCase } from "../../use-cases/transfer.use-cases/find-transfers-by-status.use-case";
import { FindTransfersBySenderIdUseCase } from "../../use-cases/transfer.use-cases/find-transfers-by-sender-id.use-case";
import { FindTransfersByReceiverIdUseCase } from "../../use-cases/transfer.use-cases/find-transfers-by-receiver-id.use-case";
import { Container } from "inversify";


function bindTransferUseCase(container: Container) {

    container.bind<CreateTransferUseCase>(CreateTransferUseCase).toSelf();
    container.bind<DeleteTransferUseCase>(DeleteTransferUseCase).toSelf();
    container.bind<GetAllTransfersUseCase>(GetAllTransfersUseCase).toSelf();
    container.bind<GetTransferByIdUseCase>(GetTransferByIdUseCase).toSelf();
    container.bind<UpdateTransferUseCase>(UpdateTransferUseCase).toSelf();
    container.bind<FindTransfersByStatusUseCase>(FindTransfersByStatusUseCase).toSelf();
    container.bind<FindTransfersBySenderIdUseCase>(FindTransfersBySenderIdUseCase).toSelf();
    container.bind<FindTransfersByReceiverIdUseCase>(FindTransfersByReceiverIdUseCase).toSelf();
}

export default bindTransferUseCase;