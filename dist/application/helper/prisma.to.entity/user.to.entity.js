"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUserEntity = toUserEntity;
const user_entity_1 = require("../../../domain/entities/user.entity");
function toUserEntity(dto) {
    return new user_entity_1.User(dto.id, dto.name, dto.email, "", dto.balance, dto.role, dto.isActive);
}
