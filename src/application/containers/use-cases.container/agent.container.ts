import { CreateAgentUseCase } from "../../use-cases/agent.use-cases/create-agent.use-case";
import { DeleteAgentUseCase } from "../../use-cases/agent.use-cases/delete-agent.use-case";
import { GetAllAgentsUseCase } from "../../use-cases/agent.use-cases/get-all-agents.use-case";
import { GetAgentByIdUseCase } from "../../use-cases/agent.use-cases/get-agent-by-id.use-case";
import { UpdateAgentUseCase } from "../../use-cases/agent.use-cases/update-agent.use-case";
import { FindAgentByUserIdUseCase } from "../../use-cases/agent.use-cases/find-agent-by-user-id.use-case";
import { FindAgentsWithTransfersUseCase } from "../../use-cases/agent.use-cases/find-agents-with-transfers.use-case";
import { Container } from "inversify";
import TYPES from "../types/types";



function bindAgentUseCase(container: Container) {

    container.bind<CreateAgentUseCase>(TYPES.CreateAgentUseCase).to(CreateAgentUseCase);
    container.bind<DeleteAgentUseCase>(TYPES.DeleteAgentUseCase).to(DeleteAgentUseCase);
    container.bind<GetAllAgentsUseCase>(TYPES.GetAllAgentsUseCase).to(GetAllAgentsUseCase);
    container.bind<GetAgentByIdUseCase>(TYPES.GetAgentByIdUseCase).to(GetAgentByIdUseCase);
    container.bind<UpdateAgentUseCase>(TYPES.UpdateAgentUseCase).to(UpdateAgentUseCase);
    container.bind<FindAgentByUserIdUseCase>(TYPES.FindAgentByUserIdUseCase).to(FindAgentByUserIdUseCase);
    container.bind<FindAgentsWithTransfersUseCase>(TYPES.FindAgentsWithTransfersUseCase).to(FindAgentsWithTransfersUseCase);
}

export default bindAgentUseCase;