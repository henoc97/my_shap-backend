import { CreateTransferUseCase } from "../../use-cases/transfer.use-cases/create-transfer.use-case";
import { DeleteTransferUseCase } from "../../use-cases/transfer.use-cases/delete-transfer.use-case";
import { GetAllTransfersUseCase } from "../../use-cases/transfer.use-cases/get-all-transfers.use-case";
import { GetTransferByIdUseCase } from "../../use-cases/transfer.use-cases/get-transfer-by-id.use-case";
import { UpdateTransferUseCase } from "../../use-cases/transfer.use-cases/update-transfer.use-case";
import { FindTransfersByStatusUseCase } from "../../use-cases/transfer.use-cases/find-transfers-by-status.use-case";
import { FindTransfersBySenderIdUseCase } from "../../use-cases/transfer.use-cases/find-transfers-by-sender-id.use-case";
import { FindTransfersByReceiverIdUseCase } from "../../use-cases/transfer.use-cases/find-transfers-by-receiver-id.use-case";
import { Container } from "inversify";
import TYPES from "../types/types";


function bindTransferUseCase(container: Container) {

    container.bind<CreateTransferUseCase>(TYPES.CreateTransferUseCase).to(CreateTransferUseCase);
    container.bind<DeleteTransferUseCase>(TYPES.DeleteTransferUseCase).to(DeleteTransferUseCase);
    container.bind<GetAllTransfersUseCase>(TYPES.GetAllTransfersUseCase).to(GetAllTransfersUseCase);
    container.bind<GetTransferByIdUseCase>(TYPES.GetTransferByIdUseCase).to(GetTransferByIdUseCase);
    container.bind<UpdateTransferUseCase>(TYPES.UpdateTransferUseCase).to(UpdateTransferUseCase);
    container.bind<FindTransfersByStatusUseCase>(TYPES.FindTransfersByStatusUseCase).to(FindTransfersByStatusUseCase);
    container.bind<FindTransfersBySenderIdUseCase>(TYPES.FindTransfersBySenderIdUseCase).to(FindTransfersBySenderIdUseCase);
    container.bind<FindTransfersByReceiverIdUseCase>(TYPES.FindTransfersByReceiverIdUseCase).to(FindTransfersByReceiverIdUseCase);
}

export default bindTransferUseCase;