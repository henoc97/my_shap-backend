"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRepositoryImpl = void 0;
const prisma_service_1 = __importDefault(require("../../prisma/prisma.service"));
const notification_to_entity_1 = require("../../application/helper/prisma.to.entity/notification.to.entity");
const inversify_1 = require("inversify");
let NotificationRepositoryImpl = class NotificationRepositoryImpl {
    async create(notification) {
        try {
            const { id, user, ...notificationData } = notification;
            const result = await prisma_service_1.default.notification.create({ data: notificationData });
            return (0, notification_to_entity_1.toNotificationEntity)(result);
        }
        catch (error) {
            console.error('Error creating notification:', error);
            throw error;
        }
    }
    async getAll() {
        try {
            const result = await prisma_service_1.default.notification.findMany();
            return result.map(notification_to_entity_1.toNotificationEntity);
        }
        catch (error) {
            console.error('Error getting all notifications:', error);
            throw error;
        }
    }
    async getById(id) {
        try {
            const result = await prisma_service_1.default.notification.findUnique({ where: { id } });
            return (0, notification_to_entity_1.toNotificationEntity)(result);
        }
        catch (error) {
            console.error('Error getting notification by ID:', error);
            throw error;
        }
    }
    async update(id, notification) {
        try {
            const { user, ...notificationData } = notification;
            const result = await prisma_service_1.default.notification.update({ where: { id }, data: notificationData });
            return (0, notification_to_entity_1.toNotificationEntity)(result);
        }
        catch (error) {
            console.error('Error updating notification:', error);
            throw error;
        }
    }
    async delete(id) {
        try {
            await prisma_service_1.default.notification.delete({ where: { id } });
            return true;
        }
        catch (error) {
            console.error('Error deleting notification:', error);
            return false;
        }
    }
    async findByUserId(userId) {
        try {
            const result = await prisma_service_1.default.notification.findMany({ where: { userId } });
            return result.map(notification_to_entity_1.toNotificationEntity);
        }
        catch (error) {
            console.error('Error finding notifications by user ID:', error);
            throw error;
        }
    }
    async markAsRead(id) {
        try {
            await prisma_service_1.default.notification.update({ where: { id }, data: { isRead: true } });
            return true;
        }
        catch (error) {
            console.error('Error marking notification as read:', error);
            return false;
        }
    }
};
exports.NotificationRepositoryImpl = NotificationRepositoryImpl;
exports.NotificationRepositoryImpl = NotificationRepositoryImpl = __decorate([
    (0, inversify_1.injectable)()
], NotificationRepositoryImpl);
