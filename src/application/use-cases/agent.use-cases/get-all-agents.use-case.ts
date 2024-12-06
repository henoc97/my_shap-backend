import { injectable, inject } from "inversify";
import { AgentService } from "../../services/agent.service";
import TYPES from "../../containers/types/types";

@injectable()
export class GetAllAgentsUseCase {
    constructor(@inject(TYPES.AgentService) private agentService: AgentService) { }

    /**
     * Executes the use case to retrieve all agents.
     * @returns A list of all agents.
     */
    async execute() {
        return this.agentService.getAllAgents();
    }
}
