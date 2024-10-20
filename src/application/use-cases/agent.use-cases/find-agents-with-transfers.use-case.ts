import { AgentService } from "../../services/agent.service";

export class FindAgentsWithTransfersUseCase {
    constructor(private agentService: AgentService) {}

    /**
     * Executes the use case to find agents with transfers.
     * @returns A list of agents with transfers.
     */
    async execute() {
        return this.agentService.findAgentsWithTransfers();
    }
}