"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNotificationEntity = toNotificationEntity;
const notification_entity_1 = require("../../../domain/entities/notification.entity");
function toNotificationEntity(dto) {
    return new notification_entity_1.Notification(dto.id, dto.userId, dto.message, dto.isRead);
}
