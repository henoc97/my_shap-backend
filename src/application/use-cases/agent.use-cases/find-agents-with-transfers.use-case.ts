import { injectable, inject } from "inversify";
import { AgentService } from "../../services/agent.service";
import TYPES from "../../containers/types/types";

@injectable()
export class FindAgentsWithTransfersUseCase {
    constructor(@inject(TYPES.AgentService) private agentService: AgentService) { }

    /**
     * Executes the use case to find agents with transfers.
     * @returns A list of agents with transfers.
     */
    async execute() {
        return this.agentService.findAgentsWithTransfers();
    }
}