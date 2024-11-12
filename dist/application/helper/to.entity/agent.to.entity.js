"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAgentEntity = toAgentEntity;
const agent_entity_1 = require("../../../domain/entities/agent.entity");
function toAgentEntity(dto) {
    return new agent_entity_1.Agent(dto.id, dto.userId);
}
