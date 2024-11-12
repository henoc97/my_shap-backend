"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor(id, userId, message, isRead = false, user) {
        this.isRead = false;
        this.createdAt = new Date();
        this.id = id;
        this.userId = userId;
        this.message = message;
        this.user = user;
        this.isRead = isRead;
    }
}
exports.Notification = Notification;
