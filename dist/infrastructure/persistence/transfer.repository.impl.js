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
exports.TransferRepositoryImpl = void 0;
const prisma_service_1 = __importDefault(require("../../prisma/prisma.service"));
const transfer_to_entity_1 = require("../../application/helper/prisma.to.entity/transfer.to.entity");
const inversify_1 = require("inversify");
let TransferRepositoryImpl = class TransferRepositoryImpl {
    async create(transfer) {
        try {
            const { id, sender, receiver, agent, fee, transaction, ...transferData } = transfer;
            const result = await prisma_service_1.default.transfer.create({ data: transferData });
            return (0, transfer_to_entity_1.toTransferEntity)(result);
        }
        catch (error) {
            console.error('Error creating transfer:', error);
            throw error;
        }
    }
    async getAll() {
        try {
            const result = await prisma_service_1.default.transfer.findMany();
            return result.map(transfer_to_entity_1.toTransferEntity);
        }
        catch (error) {
            console.error('Error getting all transfers:', error);
            throw error;
        }
    }
    async getById(id) {
        try {
            const result = await prisma_service_1.default.transfer.findUnique({ where: { id } });
            return (0, transfer_to_entity_1.toTransferEntity)(result);
        }
        catch (error) {
            console.error('Error getting transfer by ID:', error);
            throw error;
        }
    }
    async update(id, transfer) {
        try {
            const { id, sender, receiver, agent, fee, transaction, ...transferData } = transfer;
            const result = await prisma_service_1.default.transfer.update({ where: { id }, data: transferData });
            return (0, transfer_to_entity_1.toTransferEntity)(result);
        }
        catch (error) {
            console.error('Error updating transfer:', error);
            throw error;
        }
    }
    async delete(id) {
        try {
            await prisma_service_1.default.transfer.delete({ where: { id } });
            return true;
        }
        catch (error) {
            console.error('Error deleting transfer:', error);
            return false;
        }
    }
    async findBySenderId(senderId) {
        try {
            const result = await prisma_service_1.default.transfer.findMany({ where: { senderId } });
            return result.map(transfer_to_entity_1.toTransferEntity);
        }
        catch (error) {
            console.error('Error finding transfers by sender ID:', error);
            throw error;
        }
    }
    async findByStatus(status) {
        try {
            const result = await prisma_service_1.default.transfer.findMany({ where: { status } });
            return result.map(transfer_to_entity_1.toTransferEntity);
        }
        catch (error) {
            console.error('Error finding transfers by status:', error);
            throw error;
        }
    }
    async findByReceiverId(receiverId) {
        try {
            const result = await prisma_service_1.default.transfer.findMany({ where: { receiverId } });
            return result.map(transfer_to_entity_1.toTransferEntity);
        }
        catch (error) {
            console.error('Error finding transfers by receiver ID:', error);
            throw error;
        }
    }
};
exports.TransferRepositoryImpl = TransferRepositoryImpl;
exports.TransferRepositoryImpl = TransferRepositoryImpl = __decorate([
    (0, inversify_1.injectable)()
], TransferRepositoryImpl);
