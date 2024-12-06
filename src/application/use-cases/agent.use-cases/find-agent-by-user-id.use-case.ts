import { injectable, inject } from "inversify";
import { AgentService } from "../../services/agent.service";
import TYPES from "../../containers/types/types";

@injectable()
export class FindAgentByUserIdUseCase {
    constructor(@inject(TYPES.AgentService) private agentService: AgentService) { }

    /**
     * Executes the use case to find an agent by user ID.
     * @param userId - The user ID associated with the agent.
     * @returns The agent associated with the specified user ID.
     */
    async execute(userId: number) {
        return this.agentService.findAgentByUserId(userId);
    }
}