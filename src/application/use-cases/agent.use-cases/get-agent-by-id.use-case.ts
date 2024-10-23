import { AgentService } from "../../services/agent.service";
import { injectable } from "inversify";

@injectable()
export class GetAgentByIdUseCase {
    constructor(private agentService: AgentService) {}

    /**
     * Executes the use case to retrieve an agent by ID.
     * @param id - The ID of the agent.
     * @returns The agent with the specified ID.
     */
    async execute(id: number) {
        return this.agentService.getAgentById(id);
    }
}