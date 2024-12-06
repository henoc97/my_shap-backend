import { injectable, inject } from "inversify";
import { AgentService } from "../../services/agent.service";
import TYPES from "../../containers/types/types";

@injectable()
export class DeleteAgentUseCase {
    constructor(@inject(TYPES.AgentService) private agentService: AgentService) { }

    /**
     * Executes the use case to delete an agent.
     * @param id - The ID of the agent to delete.
     * @returns A boolean indicating if the deletion was successful.
     */
    async execute(id: number) {
        return this.agentService.deleteAgent(id);
    }
}