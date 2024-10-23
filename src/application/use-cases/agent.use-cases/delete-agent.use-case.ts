import { AgentService } from "../../services/agent.service";
import { injectable } from "inversify";

@injectable()
export class DeleteAgentUseCase {
    constructor(private agentService: AgentService) {}

    /**
     * Executes the use case to delete an agent.
     * @param id - The ID of the agent to delete.
     * @returns A boolean indicating if the deletion was successful.
     */
    async execute(id: number) {
        return this.agentService.deleteAgent(id);
    }
}