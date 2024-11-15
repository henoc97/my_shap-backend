import { CreateTransactionUseCase } from "../../use-cases/transaction.use-cases/create-transaction.use-case";
import { DeleteTransactionUseCase } from "../../use-cases/transaction.use-cases/delete-transaction.use-case";
import { GetAllTransactionsUseCase } from "../../use-cases/transaction.use-cases/get-all-transactions.use-case";
import { GetTransactionByIdUseCase } from "../../use-cases/transaction.use-cases/get-transaction-by-id.use-case";
import { UpdateTransactionUseCase } from "../../use-cases/transaction.use-cases/update-transaction.use-case";
import { FindTransactionsByUserIdUseCase } from "../../use-cases/transaction.use-cases/find-transactions-by-user-id.use-case";
import { FindTransactionsByTypeUseCase } from "../../use-cases/transaction.use-cases/find-transactions-by-type.use-case";
import { Container } from "inversify/lib/container/container";


function bindTransctionUseCase(container: Container) {

    container.bind<CreateTransactionUseCase>(CreateTransactionUseCase).toSelf();
    container.bind<DeleteTransactionUseCase>(DeleteTransactionUseCase).toSelf();
    container.bind<GetAllTransactionsUseCase>(GetAllTransactionsUseCase).toSelf();
    container.bind<GetTransactionByIdUseCase>(GetTransactionByIdUseCase).toSelf();
    container.bind<UpdateTransactionUseCase>(UpdateTransactionUseCase).toSelf();
    container.bind<FindTransactionsByUserIdUseCase>(FindTransactionsByUserIdUseCase).toSelf();
    container.bind<FindTransactionsByTypeUseCase>(FindTransactionsByTypeUseCase).toSelf();
}

export default bindTransctionUseCase;