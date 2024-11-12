"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const create_notification_use_case_1 = require("../../application/use-cases/notification.use-cases/create-notification.use-case");
const get_all_notifications_use_case_1 = require("../../application/use-cases/notification.use-cases/get-all-notifications.use-case");
const get_notification_by_id_use_case_1 = require("../../application/use-cases/notification.use-cases/get-notification-by-id.use-case");
const delete_notification_use_case_1 = require("../../application/use-cases/notification.use-cases/delete-notification.use-case");
const update_notification_use_case_1 = require("../../application/use-cases/notification.use-cases/update-notification.use-case");
const find_notifications_by_user_id_use_case_1 = require("../../application/use-cases/notification.use-cases/find-notifications-by-user-id.use-case");
const mark_notification_as_read_use_case_1 = require("../../application/use-cases/notification.use-cases/mark-notification-as-read.use-case");
const inversify_1 = require("inversify");
let NotificationController = class NotificationController {
    constructor(createNotificationUseCase, getAllNotificationsUseCase, getNotificationByIdUseCase, deleteNotificationUseCase, updateNotificationUseCase, findNotificationsByUserIdUseCase, markNotificationAsReadUseCase) {
        this.createNotificationUseCase = createNotificationUseCase;
        this.getAllNotificationsUseCase = getAllNotificationsUseCase;
        this.getNotificationByIdUseCase = getNotificationByIdUseCase;
        this.deleteNotificationUseCase = deleteNotificationUseCase;
        this.updateNotificationUseCase = updateNotificationUseCase;
        this.findNotificationsByUserIdUseCase = findNotificationsByUserIdUseCase;
        this.markNotificationAsReadUseCase = markNotificationAsReadUseCase;
    }
    async createNotification(req, res) {
        try {
            const notificationData = req.body;
            const notification = await this.createNotificationUseCase.execute(notificationData);
            res.status(201).json(notification);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async getAllNotifications(req, res) {
        try {
            const notifications = await this.getAllNotificationsUseCase.execute();
            res.status(200).json(notifications);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async getNotificationById(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            const notification = await this.getNotificationByIdUseCase.execute(id);
            if (notification) {
                res.status(200).json(notification);
            }
            else {
                res.status(404).json({ error: 'Notification not found' });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async deleteNotification(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            const success = await this.deleteNotificationUseCase.execute(id);
            if (success) {
                res.status(200).json({ message: 'Notification deleted successfully' });
            }
            else {
                res.status(404).json({ error: 'Notification not found' });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async updateNotification(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            const notificationData = req.body;
            const updatedNotification = await this.updateNotificationUseCase.execute(id, notificationData);
            if (updatedNotification) {
                res.status(200).json(updatedNotification);
            }
            else {
                res.status(404).json({ error: 'Notification not found' });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async findNotificationsByUserId(req, res) {
        try {
            const userId = parseInt(req.params.userId, 10);
            const notifications = await this.findNotificationsByUserIdUseCase.execute(userId);
            res.status(200).json(notifications);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async markNotificationAsRead(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            const success = await this.markNotificationAsReadUseCase.execute(id);
            if (success) {
                res.status(200).json({ message: 'Notification marked as read' });
            }
            else {
                res.status(404).json({ error: 'Notification not found' });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
};
exports.NotificationController = NotificationController;
exports.NotificationController = NotificationController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(create_notification_use_case_1.CreateNotificationUseCase)),
    __param(1, (0, inversify_1.inject)(get_all_notifications_use_case_1.GetAllNotificationsUseCase)),
    __param(2, (0, inversify_1.inject)(get_notification_by_id_use_case_1.GetNotificationByIdUseCase)),
    __param(3, (0, inversify_1.inject)(delete_notification_use_case_1.DeleteNotificationUseCase)),
    __param(4, (0, inversify_1.inject)(update_notification_use_case_1.UpdateNotificationUseCase)),
    __param(5, (0, inversify_1.inject)(find_notifications_by_user_id_use_case_1.FindNotificationsByUserIdUseCase)),
    __param(6, (0, inversify_1.inject)(mark_notification_as_read_use_case_1.MarkNotificationAsReadUseCase)),
    __metadata("design:paramtypes", [create_notification_use_case_1.CreateNotificationUseCase,
        get_all_notifications_use_case_1.GetAllNotificationsUseCase,
        get_notification_by_id_use_case_1.GetNotificationByIdUseCase,
        delete_notification_use_case_1.DeleteNotificationUseCase,
        update_notification_use_case_1.UpdateNotificationUseCase,
        find_notifications_by_user_id_use_case_1.FindNotificationsByUserIdUseCase,
        mark_notification_as_read_use_case_1.MarkNotificationAsReadUseCase])
], NotificationController);
