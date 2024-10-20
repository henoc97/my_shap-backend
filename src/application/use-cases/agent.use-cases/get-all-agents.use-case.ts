import { AgentService } from "../../services/agent.service";

export class GetAllAgentsUseCase {
    constructor(private agentService: AgentService) {}

    /**
     * Executes the use case to retrieve all agents.
     * @returns A list of all agents.
     */
    async execute() {
        return this.agentService.getAllAgents();
    }
}
