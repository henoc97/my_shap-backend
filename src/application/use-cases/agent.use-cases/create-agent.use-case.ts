import { injectable, inject } from "inversify";
import { AgentDTO } from "../../../presentation/dtos/agent.dto";
import { toAgentEntity } from "../../helper/to.entity/agent.to.entity";
import { AgentService } from "../../services/agent.service";
import TYPES from "../../containers/types/types";

@injectable()
export class CreateAgentUseCase {
    constructor(@inject(TYPES.AgentService) private agentService: AgentService) { }

    /**
     * Executes the use case to create a new agent.
     * @param agentDto - The DTO containing agent data.
     * @returns The created agent.
     */
    async execute(agentDto: AgentDTO) {
        const agent = toAgentEntity(agentDto);
        return this.agentService.createAgent(agent);
    }
}
