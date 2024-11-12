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
exports.AgentRepositoryImpl = void 0;
const prisma_service_1 = __importDefault(require("../../prisma/prisma.service"));
const agent_to_entity_1 = require("../../application/helper/prisma.to.entity/agent.to.entity");
const inversify_1 = require("inversify");
let AgentRepositoryImpl = class AgentRepositoryImpl {
    async create(agent) {
        try {
            const { id, transfers, user, ...agentData } = agent;
            const result = await prisma_service_1.default.agent.create({ data: agentData });
            return (0, agent_to_entity_1.toAgentEntity)(result);
        }
        catch (error) {
            console.error('Error creating agent:', error);
            throw error;
        }
    }
    async getAll() {
        try {
            const result = await prisma_service_1.default.agent.findMany();
            return result.map(agent_to_entity_1.toAgentEntity);
        }
        catch (error) {
            console.error('Error getting all agents:', error);
            throw error;
        }
    }
    async getById(id) {
        try {
            const result = await prisma_service_1.default.agent.findUnique({ where: { id } });
            return (0, agent_to_entity_1.toAgentEntity)(result);
        }
        catch (error) {
            console.error('Error getting agent by ID:', error);
            throw error;
        }
    }
    async update(id, agent) {
        try {
            const { transfers, user, ...agentData } = agent;
            const result = await prisma_service_1.default.agent.update({ where: { id }, data: agentData });
            return (0, agent_to_entity_1.toAgentEntity)(result);
        }
        catch (error) {
            console.error('Error updating agent:', error);
            throw error;
        }
    }
    async delete(id) {
        try {
            await prisma_service_1.default.agent.delete({ where: { id } });
            return true;
        }
        catch (error) {
            console.error('Error deleting agent:', error);
            return false;
        }
    }
    async findByUserId(userId) {
        try {
            const result = await prisma_service_1.default.agent.findUnique({ where: { userId } });
            return (0, agent_to_entity_1.toAgentEntity)(result);
        }
        catch (error) {
            console.error('Error finding agent by user ID:', error);
            throw error;
        }
    }
    async findAgentsWithTransfers() {
        try {
            const result = await prisma_service_1.default.agent.findMany({
                where: {
                    transfers: {
                        some: {}
                    }
                }
            });
            return result.map(agent_to_entity_1.toAgentEntity);
        }
        catch (error) {
            console.error('Error finding agents with transfers:', error);
            throw error;
        }
    }
};
exports.AgentRepositoryImpl = AgentRepositoryImpl;
exports.AgentRepositoryImpl = AgentRepositoryImpl = __decorate([
    (0, inversify_1.injectable)()
], AgentRepositoryImpl);
