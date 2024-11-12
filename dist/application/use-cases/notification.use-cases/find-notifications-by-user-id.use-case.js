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
exports.FindNotificationsByUserIdUseCase = void 0;
const notification_service_1 = require("../../services/notification.service");
const inversify_1 = require("inversify");
let FindNotificationsByUserIdUseCase = class FindNotificationsByUserIdUseCase {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    /**
     * Executes the use case to find notifications by user ID.
     * @param userId - The user ID.
     * @returns A list of notifications for the user.
     */
    async execute(userId) {
        return this.notificationService.findNotificationsByUserId(userId);
    }
};
exports.FindNotificationsByUserIdUseCase = FindNotificationsByUserIdUseCase;
exports.FindNotificationsByUserIdUseCase = FindNotificationsByUserIdUseCase = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], FindNotificationsByUserIdUseCase);
