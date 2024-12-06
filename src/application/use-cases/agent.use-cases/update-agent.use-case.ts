import { injectable, inject } from "inversify";
import { AgentService } from "../../services/agent.service";
import { Agent } from "../../../domain/entities/agent.entity";
import TYPES from "../../containers/types/types";

@injectable()
export class UpdateAgentUseCase {
    constructor(@inject(TYPES.AgentService) private agentService: AgentService) { }

    /**
     * Executes the use case to update an agent.
     * @param id - The ID of the agent to update.
     * @param agent - The partial agent data to update.
     * @returns The updated agent.
     */
    async execute(id: number, agent: Partial<Agent>) {
        return this.agentService.updateAgent(id, agent);
    }
}