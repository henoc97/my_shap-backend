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
exports.UserRepositoryImpl = void 0;
const prisma_service_1 = __importDefault(require("../../prisma/prisma.service"));
const user_to_entity_1 = require("../../application/helper/prisma.to.entity/user.to.entity");
const inversify_1 = require("inversify");
let UserRepositoryImpl = class UserRepositoryImpl {
    getAll() {
        throw new Error('Method not implemented.');
    }
    getById(id) {
        throw new Error('Method not implemented.');
    }
    async create(user) {
        try {
            const { id, transfersSent, transfersReceived, transactions, notifications, agent, admin, ...userData } = user;
            const result = await prisma_service_1.default.user.create({ data: userData });
            const userDataEntity = (0, user_to_entity_1.toUserEntity)(result);
            return userDataEntity;
        }
        catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }
    async readAll() {
        try {
            const result = await prisma_service_1.default.user.findMany();
            return result.map(user_to_entity_1.toUserEntity);
        }
        catch (error) {
            console.error('Error reading all users:', error);
            throw error;
        }
    }
    async readById(id) {
        try {
            const result = await prisma_service_1.default.user.findUnique({ where: { id } });
            return (0, user_to_entity_1.toUserEntity)(result);
        }
        catch (error) {
            console.error('Error reading user by ID:', error);
            throw error;
        }
    }
    async update(id, user) {
        try {
            const { transfersSent, transfersReceived, transactions, notifications, agent, admin, ...userData } = user;
            const result = await prisma_service_1.default.user.update({ where: { id }, data: userData });
            const userDataEntity = (0, user_to_entity_1.toUserEntity)(result);
            return userDataEntity;
        }
        catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    }
    async delete(id) {
        try {
            await prisma_service_1.default.user.delete({ where: { id } });
            return true;
        }
        catch (error) {
            console.error('Error deleting user:', error);
            return false;
        }
    }
    async findByEmail(email) {
        try {
            const result = await prisma_service_1.default.user.findUnique({ where: { email } });
            return (0, user_to_entity_1.toUserEntity)(result);
        }
        catch (error) {
            console.error('Error finding user by email:', error);
            throw error;
        }
    }
    async findActiveUsers() {
        try {
            const result = await prisma_service_1.default.user.findMany({ where: { isActive: true } });
            return result.map(user_to_entity_1.toUserEntity);
        }
        catch (error) {
            console.error('Error finding active users:', error);
            throw error;
        }
    }
};
exports.UserRepositoryImpl = UserRepositoryImpl;
exports.UserRepositoryImpl = UserRepositoryImpl = __decorate([
    (0, inversify_1.injectable)()
], UserRepositoryImpl);
