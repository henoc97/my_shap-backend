import { AgentService } from "../../services/agent.service";
import { injectable } from "inversify";


@injectable()
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
