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
exports.FindAdminByUserIdUseCase = void 0;
const inversify_1 = require("inversify");
const admin_service_1 = require("../../services/admin.service");
let FindAdminByUserIdUseCase = class FindAdminByUserIdUseCase {
    constructor(adminService) {
        this.adminService = adminService;
    }
    /**
     * Executes the use case to find an admin by user ID.
     * @param userId - The user ID associated with the admin.
     * @returns The admin associated with the specified user ID.
     */
    async execute(userId) {
        return this.adminService.findAdminByUserId(userId);
    }
};
exports.FindAdminByUserIdUseCase = FindAdminByUserIdUseCase;
exports.FindAdminByUserIdUseCase = FindAdminByUserIdUseCase = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], FindAdminByUserIdUseCase);
