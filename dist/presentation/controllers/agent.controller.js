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
exports.AgentController = void 0;
const create_agent_use_case_1 = require("../../application/use-cases/agent.use-cases/create-agent.use-case");
const delete_agent_use_case_1 = require("../../application/use-cases/agent.use-cases/delete-agent.use-case");
const find_agent_by_user_id_use_case_1 = require("../../application/use-cases/agent.use-cases/find-agent-by-user-id.use-case");
const find_agents_with_transfers_use_case_1 = require("../../application/use-cases/agent.use-cases/find-agents-with-transfers.use-case");
const get_all_agents_use_case_1 = require("../../application/use-cases/agent.use-cases/get-all-agents.use-case");
const get_agent_by_id_use_case_1 = require("../../application/use-cases/agent.use-cases/get-agent-by-id.use-case");
const update_agent_use_case_1 = require("../../application/use-cases/agent.use-cases/update-agent.use-case");
const inversify_1 = require("inversify");
let AgentController = class AgentController {
    constructor(createAgentUseCase, deleteAgentUseCase, findAgentByUserIdUseCase, findAgentsWithTransfersUseCase, getAllAgentsUseCase, getAgentByIdUseCase, updateAgentUseCase) {
        this.createAgentUseCase = createAgentUseCase;
        this.deleteAgentUseCase = deleteAgentUseCase;
        this.findAgentByUserIdUseCase = findAgentByUserIdUseCase;
        this.findAgentsWithTransfersUseCase = findAgentsWithTransfersUseCase;
        this.getAllAgentsUseCase = getAllAgentsUseCase;
        this.getAgentByIdUseCase = getAgentByIdUseCase;
        this.updateAgentUseCase = updateAgentUseCase;
    }
    async createAgent(req, res) {
        try {
            const agentDto = req.body;
            const agent = await this.createAgentUseCase.execute(agentDto);
            res.status(201).json(agent);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            }
            else {
                res.status(500).json('Unknown error');
            }
        }
    }
    async deleteAgent(req, res) {
        try {
            const id = Number(req.params.id);
            const success = await this.deleteAgentUseCase.execute(id);
            res.status(success ? 200 : 404).json({ success });
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            }
            else {
                res.status(500).json('Unknown error');
            }
        }
    }
    async findAgentByUserId(req, res) {
        try {
            const userId = Number(req.params.userId);
            const agent = await this.findAgentByUserIdUseCase.execute(userId);
            res.status(200).json(agent);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            }
            else {
                res.status(500).json('Unknown error');
            }
        }
    }
    async findAgentsWithTransfers(req, res) {
        try {
            const agents = await this.findAgentsWithTransfersUseCase.execute();
            res.status(200).json(agents);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            }
            else {
                res.status(500).json('Unknown error');
            }
        }
    }
    async getAllAgents(req, res) {
        try {
            const agents = await this.getAllAgentsUseCase.execute();
            res.status(200).json(agents);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            }
            else {
                res.status(500).json('Unknown error');
            }
        }
    }
    async getAgentById(req, res) {
        try {
            const id = Number(req.params.id);
            const agent = await this.getAgentByIdUseCase.execute(id);
            res.status(200).json(agent);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            }
            else {
                res.status(500).json('Unknown error');
            }
        }
    }
    async updateAgent(req, res) {
        try {
            const id = Number(req.params.id);
            const agentData = req.body;
            const agent = await this.updateAgentUseCase.execute(id, agentData);
            res.status(200).json(agent);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            }
            else {
                res.status(500).json('Unknown error');
            }
        }
    }
};
exports.AgentController = AgentController;
exports.AgentController = AgentController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(create_agent_use_case_1.CreateAgentUseCase)),
    __param(1, (0, inversify_1.inject)(delete_agent_use_case_1.DeleteAgentUseCase)),
    __param(2, (0, inversify_1.inject)(find_agent_by_user_id_use_case_1.FindAgentByUserIdUseCase)),
    __param(3, (0, inversify_1.inject)(find_agents_with_transfers_use_case_1.FindAgentsWithTransfersUseCase)),
    __param(4, (0, inversify_1.inject)(get_all_agents_use_case_1.GetAllAgentsUseCase)),
    __param(5, (0, inversify_1.inject)(get_agent_by_id_use_case_1.GetAgentByIdUseCase)),
    __param(6, (0, inversify_1.inject)(update_agent_use_case_1.UpdateAgentUseCase)),
    __metadata("design:paramtypes", [create_agent_use_case_1.CreateAgentUseCase,
        delete_agent_use_case_1.DeleteAgentUseCase,
        find_agent_by_user_id_use_case_1.FindAgentByUserIdUseCase,
        find_agents_with_transfers_use_case_1.FindAgentsWithTransfersUseCase,
        get_all_agents_use_case_1.GetAllAgentsUseCase,
        get_agent_by_id_use_case_1.GetAgentByIdUseCase,
        update_agent_use_case_1.UpdateAgentUseCase])
], AgentController);
