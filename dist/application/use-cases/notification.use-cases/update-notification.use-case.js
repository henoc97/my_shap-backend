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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotificationUseCase = void 0;
const notification_service_1 = require("../../services/notification.service");
const inversify_1 = require("inversify");
let UpdateNotificationUseCase = class UpdateNotificationUseCase {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    /**
     * Executes the use case to update a notification.
     * @param id - The ID of the notification.
     * @param notificationData - The data to update the notification with.
     * @returns The updated notification or null if not found.
     */
    async execute(id, notificationData) {
        return this.notificationService.updateNotification(id, notificationData);
    }
};
exports.UpdateNotificationUseCase = UpdateNotificationUseCase;
exports.UpdateNotificationUseCase = UpdateNotificationUseCase = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], UpdateNotificationUseCase);
