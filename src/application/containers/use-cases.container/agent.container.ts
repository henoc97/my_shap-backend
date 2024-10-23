import { CreateAgentUseCase } from "../../use-cases/agent.use-cases/create-agent.use-case";
import { DeleteAgentUseCase } from "../../use-cases/agent.use-cases/delete-agent.use-case";
import { GetAllAgentsUseCase } from "../../use-cases/agent.use-cases/get-all-agents.use-case";
import { GetAgentByIdUseCase } from "../../use-cases/agent.use-cases/get-agent-by-id.use-case";
import { UpdateAgentUseCase } from "../../use-cases/agent.use-cases/update-agent.use-case";
import { FindAgentByUserIdUseCase } from "../../use-cases/agent.use-cases/find-agent-by-user-id.use-case";
import { FindAgentsWithTransfersUseCase } from "../../use-cases/agent.use-cases/find-agents-with-transfers.use-case";
import { container } from "../repositories.container";


container.bind<CreateAgentUseCase>(CreateAgentUseCase).toSelf();
container.bind<DeleteAgentUseCase>(DeleteAgentUseCase).toSelf();
container.bind<GetAllAgentsUseCase>(GetAllAgentsUseCase).toSelf();
container.bind<GetAgentByIdUseCase>(GetAgentByIdUseCase).toSelf();
container.bind<UpdateAgentUseCase>(UpdateAgentUseCase).toSelf();
container.bind<FindAgentByUserIdUseCase>(FindAgentByUserIdUseCase).toSelf();
container.bind<FindAgentsWithTransfersUseCase>(FindAgentsWithTransfersUseCase).toSelf();
