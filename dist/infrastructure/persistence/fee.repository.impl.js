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
exports.FeeRepositoryImpl = void 0;
const prisma_service_1 = __importDefault(require("../../prisma/prisma.service"));
const fee_to_entity_1 = require("../../application/helper/prisma.to.entity/fee.to.entity");
const inversify_1 = require("inversify");
let FeeRepositoryImpl = class FeeRepositoryImpl {
    async create(fee) {
        try {
            const { id, transaction, transfer, ...feeData } = fee;
            const result = await prisma_service_1.default.fee.create({ data: feeData });
            return (0, fee_to_entity_1.toFeeEntity)(result);
        }
        catch (error) {
            console.error('Error creating fee:', error);
            throw error;
        }
    }
    async getAll() {
        try {
            const result = await prisma_service_1.default.fee.findMany();
            return result.map(fee_to_entity_1.toFeeEntity);
        }
        catch (error) {
            console.error('Error getting all fees:', error);
            throw error;
        }
    }
    async getById(id) {
        try {
            const result = await prisma_service_1.default.fee.findUnique({ where: { id } });
            return (0, fee_to_entity_1.toFeeEntity)(result);
        }
        catch (error) {
            console.error('Error getting fee by ID:', error);
            throw error;
        }
    }
    async update(id, fee) {
        try {
            const { transaction, transfer, ...feeData } = fee;
            const result = await prisma_service_1.default.fee.update({ where: { id }, data: feeData });
            return (0, fee_to_entity_1.toFeeEntity)(result);
        }
        catch (error) {
            console.error('Error updating fee:', error);
            throw error;
        }
    }
    async delete(id) {
        try {
            await prisma_service_1.default.fee.delete({ where: { id } });
            return true;
        }
        catch (error) {
            console.error('Error deleting fee:', error);
            return false;
        }
    }
    async findByTransactionId(transactionId) {
        try {
            const result = await prisma_service_1.default.fee.findUnique({ where: { id: transactionId } });
            return (0, fee_to_entity_1.toFeeEntity)(result);
        }
        catch (error) {
            console.error('Error finding fee by transaction ID:', error);
            throw error;
        }
    }
};
exports.FeeRepositoryImpl = FeeRepositoryImpl;
exports.FeeRepositoryImpl = FeeRepositoryImpl = __decorate([
    (0, inversify_1.injectable)()
], FeeRepositoryImpl);
