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
exports.AdminRepositoryImpl = void 0;
const prisma_service_1 = __importDefault(require("../../prisma/prisma.service"));
const admin_to_entity_1 = require("../../application/helper/prisma.to.entity/admin.to.entity");
const inversify_1 = require("inversify");
let AdminRepositoryImpl = class AdminRepositoryImpl {
    async create(admin) {
        try {
            const { id, user, ...adminData } = admin;
            const result = await prisma_service_1.default.admin.create({ data: adminData });
            return (0, admin_to_entity_1.toAdminEntity)(result);
        }
        catch (error) {
            console.error('Error creating admin:', error);
            throw error;
        }
    }
    async getAll() {
        try {
            const result = await prisma_service_1.default.admin.findMany();
            return result.map(admin_to_entity_1.toAdminEntity);
        }
        catch (error) {
            console.error('Error getting all admins:', error);
            throw error;
        }
    }
    async getById(id) {
        try {
            const result = await prisma_service_1.default.admin.findUnique({ where: { id } });
            return (0, admin_to_entity_1.toAdminEntity)(result);
        }
        catch (error) {
            console.error('Error getting admin by ID:', error);
            throw error;
        }
    }
    async update(id, admin) {
        try {
            const { user, ...adminData } = admin;
            const result = await prisma_service_1.default.admin.update({ where: { id }, data: adminData });
            return (0, admin_to_entity_1.toAdminEntity)(result);
        }
        catch (error) {
            console.error('Error updating admin:', error);
            throw error;
        }
    }
    async delete(id) {
        try {
            await prisma_service_1.default.admin.delete({ where: { id } });
            return true;
        }
        catch (error) {
            console.error('Error deleting admin:', error);
            return false;
        }
    }
    async findByUserId(userId) {
        try {
            const result = await prisma_service_1.default.admin.findUnique({ where: { userId } });
            return (0, admin_to_entity_1.toAdminEntity)(result);
        }
        catch (error) {
            console.error('Error finding admin by user ID:', error);
            throw error;
        }
    }
};
exports.AdminRepositoryImpl = AdminRepositoryImpl;
exports.AdminRepositoryImpl = AdminRepositoryImpl = __decorate([
    (0, inversify_1.injectable)()
], AdminRepositoryImpl);
