import { injectable, inject } from "inversify";
import { Agent } from "../../domain/entities/agent.entity";
import { IAgentRepository } from "../../domain/repositories/agent.repository";

@injectable()
export class AgentService {
    constructor(@inject("IAgentRepository") private agentRepository: IAgentRepository) { }

    async createAgent(agent: Agent): Promise<Agent> {
        return this.agentRepository.create(agent);
    }

    async getAllAgents(): Promise<Agent[]> {
        return this.agentRepository.getAll();
    }

    async getAgentById(id: number): Promise<Agent | null> {
        return this.agentRepository.getById(id);
    }

    async updateAgent(id: number, agent: Partial<Agent>): Promise<Agent | null> {
        return this.agentRepository.update(id, agent);
    }

    async deleteAgent(id: number): Promise<boolean> {
        return this.agentRepository.delete(id);
    }

    async findAgentByUserId(userId: number): Promise<Agent | null> {
        return this.agentRepository.findByUserId(userId);
    }

    async findAgentsWithTransfers(): Promise<Agent[]> {
        return this.agentRepository.findAgentsWithTransfers();
    }
}