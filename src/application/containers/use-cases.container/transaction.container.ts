import { CreateTransactionUseCase } from "../../use-cases/transaction.use-cases/create-transaction.use-case";
import { DeleteTransactionUseCase } from "../../use-cases/transaction.use-cases/delete-transaction.use-case";
import { GetAllTransactionsUseCase } from "../../use-cases/transaction.use-cases/get-all-transactions.use-case";
import { GetTransactionByIdUseCase } from "../../use-cases/transaction.use-cases/get-transaction-by-id.use-case";
import { UpdateTransactionUseCase } from "../../use-cases/transaction.use-cases/update-transaction.use-case";
import { FindTransactionsByUserIdUseCase } from "../../use-cases/transaction.use-cases/find-transactions-by-user-id.use-case";
import { FindTransactionsByTypeUseCase } from "../../use-cases/transaction.use-cases/find-transactions-by-type.use-case";
import { Container } from "inversify";
import TYPES from "../types/types";


function bindTransctionUseCase(container: Container) {

    container.bind<CreateTransactionUseCase>(TYPES.CreateTransactionUseCase).to(CreateTransactionUseCase);
    container.bind<DeleteTransactionUseCase>(TYPES.DeleteTransactionUseCase).to(DeleteTransactionUseCase);
    container.bind<GetAllTransactionsUseCase>(TYPES.GetAllTransactionsUseCase).to(GetAllTransactionsUseCase);
    container.bind<GetTransactionByIdUseCase>(TYPES.GetTransactionByIdUseCase).to(GetTransactionByIdUseCase);
    container.bind<UpdateTransactionUseCase>(TYPES.UpdateTransactionUseCase).to(UpdateTransactionUseCase);
    container.bind<FindTransactionsByUserIdUseCase>(TYPES.FindTransactionsByUserIdUseCase).to(FindTransactionsByUserIdUseCase);
    container.bind<FindTransactionsByTypeUseCase>(TYPES.FindTransactionsByTypeUseCase).to(FindTransactionsByTypeUseCase);
}

export default bindTransctionUseCase;