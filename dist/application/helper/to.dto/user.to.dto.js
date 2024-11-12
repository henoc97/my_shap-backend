"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUserDTO = toUserDTO;
const user_dto_1 = require("../../../presentation/dtos/user.dto");
function toUserDTO(entity) {
    return new user_dto_1.UserDTO(entity.id, entity.name, entity.email, entity.balance, entity.role, entity.isActive, entity.createdAt, entity.updatedAt);
}
