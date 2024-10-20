import { AgentDTO } from "../../../presentation/dtos/agent.dto";
import { Agent } from "../../../domain/entities/agent.entity";
import { User } from "../../../domain/entities/user.entity";
import { Role } from "../../../domain/enums/role.enum";

export function toAgentEntity(dto: AgentDTO): Agent {
  return new Agent(
    dto.id,
    dto.userId,
  );
}
