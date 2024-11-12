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
exports.AgentService = void 0;
const inversify_1 = require("inversify");
let AgentService = class AgentService {
    constructor(agentRepository) {
        this.agentRepository = agentRepository;
    }
    async createAgent(agent) {
        return this.agentRepository.create(agent);
    }
    async getAllAgents() {
        return this.agentRepository.getAll();
    }
    async getAgentById(id) {
        return this.agentRepository.getById(id);
    }
    async updateAgent(id, agent) {
        return this.agentRepository.update(id, agent);
    }
    async deleteAgent(id) {
        return this.agentRepository.delete(id);
    }
    async findAgentByUserId(userId) {
        return this.agentRepository.findByUserId(userId);
    }
    async findAgentsWithTransfers() {
        return this.agentRepository.findAgentsWithTransfers();
    }
};
exports.AgentService = AgentService;
exports.AgentService = AgentService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)("IAgentRepository")),
    __metadata("design:paramtypes", [Object])
], AgentService);
