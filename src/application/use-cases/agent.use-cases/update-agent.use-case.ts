import { AgentService } from "../../services/agent.service";
import { Agent } from "../../../domain/entities/agent.entity";

export class UpdateAgentUseCase {
    constructor(private agentService: AgentService) {}

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