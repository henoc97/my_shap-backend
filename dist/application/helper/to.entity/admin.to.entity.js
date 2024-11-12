"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAdminEntity = toAdminEntity;
const admin_entity_1 = require("../../../domain/entities/admin.entity");
function toAdminEntity(dto) {
    return new admin_entity_1.Admin(dto.id, dto.userId);
}
