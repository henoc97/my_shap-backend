import { AgentDTO } from "../../../presentation/dtos/agent.dto";
import { Agent } from "../../../domain/entities/agent.entity";

export function toAgentEntity(dto: any): Agent {
  return new Agent(
    dto.id,
    dto.userId,
  );
}
