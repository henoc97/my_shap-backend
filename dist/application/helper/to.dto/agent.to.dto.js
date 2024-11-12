"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAgentDTO = toAgentDTO;
const agent_dto_1 = require("../../../presentation/dtos/agent.dto");
function toAgentDTO(entity) {
    return new agent_dto_1.AgentDTO(entity.id, entity.userId, entity.createdAt);
}
