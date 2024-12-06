import { injectable, inject } from "inversify";
import { AgentService } from "../../services/agent.service";
import TYPES from "../../containers/types/types";

@injectable()
export class GetAgentByIdUseCase {
    constructor(@inject(TYPES.AgentService) private agentService: AgentService) { }

    /**
     * Executes the use case to retrieve an agent by ID.
     * @param id - The ID of the agent.
     * @returns The agent with the specified ID.
     */
    async execute(id: number) {
        return this.agentService.getAgentById(id);
    }
}