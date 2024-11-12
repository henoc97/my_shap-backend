"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAdminDTO = toAdminDTO;
const admin_dto_1 = require("../../../presentation/dtos/admin.dto");
function toAdminDTO(entity) {
    return new admin_dto_1.AdminDTO(entity.id, entity.userId, entity.createdAt);
}
