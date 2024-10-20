import { Agent } from "../entities/agent.entity";

export interface IAgentRepository {
    create(agent: Agent): Promise<Agent>;
    getAll(): Promise<Agent[]>;
    getById(id: number): Promise<Agent | null>;
    update(id: number, agent: Partial<Agent>): Promise<Agent | null>;
    delete(id: number): Promise<boolean>;
    findByUserId(userId: number): Promise<Agent | null>;
    findAgentsWithTransfers(): Promise<Agent[]>;
}
