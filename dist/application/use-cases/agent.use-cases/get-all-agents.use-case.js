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
exports.GetAllAgentsUseCase = void 0;
const agent_service_1 = require("../../services/agent.service");
const inversify_1 = require("inversify");
let GetAllAgentsUseCase = class GetAllAgentsUseCase {
    constructor(agentService) {
        this.agentService = agentService;
    }
    /**
     * Executes the use case to retrieve all agents.
     * @returns A list of all agents.
     */
    async execute() {
        return this.agentService.getAllAgents();
    }
};
exports.GetAllAgentsUseCase = GetAllAgentsUseCase;
exports.GetAllAgentsUseCase = GetAllAgentsUseCase = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [agent_service_1.AgentService])
], GetAllAgentsUseCase);
