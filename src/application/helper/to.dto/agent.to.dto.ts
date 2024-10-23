import { Agent } from "../../../domain/entities/agent.entity";
import { AgentDTO } from "../../../presentation/dtos/agent.dto";


export function toAgentDTO(entity: Agent): AgentDTO {
    return new AgentDTO(entity.id, entity.userId, entity.createdAt);
}
