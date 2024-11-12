"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNotificationDTO = toNotificationDTO;
const notification_dto_1 = require("../../../presentation/dtos/notification.dto");
function toNotificationDTO(entity) {
    return new notification_dto_1.NotificationDTO(entity.id, entity.userId, entity.message, entity.isRead, entity.createdAt);
}
