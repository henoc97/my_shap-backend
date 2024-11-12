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
exports.TransactionRepositoryImpl = void 0;
const prisma_service_1 = __importDefault(require("../../prisma/prisma.service"));
const transaction_to_entity_1 = require("../../application/helper/prisma.to.entity/transaction.to.entity");
const inversify_1 = require("inversify");
let TransactionRepositoryImpl = class TransactionRepositoryImpl {
    getAll() {
        throw new Error('Method not implemented.');
    }
    getById(id) {
        throw new Error('Method not implemented.');
    }
    async create(transaction) {
        try {
            const { id, user, transfer, fee, ...transactionData } = transaction;
            const result = await prisma_service_1.default.transaction.create({ data: transactionData });
            return (0, transaction_to_entity_1.toTransactionEntity)(result);
        }
        catch (error) {
            console.error('Error creating transaction:', error);
            throw error;
        }
    }
    async readAll() {
        try {
            const result = await prisma_service_1.default.transaction.findMany();
            return result.map(transaction_to_entity_1.toTransactionEntity);
        }
        catch (error) {
            console.error('Error reading all transactions:', error);
            throw error;
        }
    }
    async readById(id) {
        try {
            const result = await prisma_service_1.default.transaction.findUnique({ where: { id } });
            return (0, transaction_to_entity_1.toTransactionEntity)(result);
        }
        catch (error) {
            console.error('Error reading transaction by ID:', error);
            throw error;
        }
    }
    async update(id, transaction) {
        try {
            const { user, transfer, fee, ...transactionData } = transaction;
            const result = await prisma_service_1.default.transaction.update({ where: { id }, data: transactionData });
            return (0, transaction_to_entity_1.toTransactionEntity)(result);
        }
        catch (error) {
            console.error('Error updating transaction:', error);
            throw error;
        }
    }
    async delete(id) {
        try {
            await prisma_service_1.default.transaction.delete({ where: { id } });
            return true;
        }
        catch (error) {
            console.error('Error deleting transaction:', error);
            return false;
        }
    }
    async findByUserId(userId) {
        try {
            const result = await prisma_service_1.default.transaction.findMany({ where: { userId } });
            return result.map(transaction_to_entity_1.toTransactionEntity);
        }
        catch (error) {
            console.error('Error finding transactions by user ID:', error);
            throw error;
        }
    }
    async findByType(type) {
        try {
            const result = await prisma_service_1.default.transaction.findMany({ where: { type } });
            return result.map(transaction_to_entity_1.toTransactionEntity);
        }
        catch (error) {
            console.error('Error finding transactions by type:', error);
            throw error;
        }
    }
};
exports.TransactionRepositoryImpl = TransactionRepositoryImpl;
exports.TransactionRepositoryImpl = TransactionRepositoryImpl = __decorate([
    (0, inversify_1.injectable)()
], TransactionRepositoryImpl);
