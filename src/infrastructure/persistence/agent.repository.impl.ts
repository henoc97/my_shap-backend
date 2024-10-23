import { IAgentRepository } from '../../domain/repositories/agent.repository';
import { Agent } from '../../domain/entities/agent.entity';
import prisma from '../../prisma/prisma.service';
import { toAgentEntity } from '../../application/helper/prisma.to.entity/agent.to.entity';
import { injectable } from 'inversify';

@injectable()
export class AgentRepositoryImpl implements IAgentRepository {
  async create(agent: Agent): Promise<Agent> {
    try {
      const { id, transfers, user, ...agentData } = agent;
      const result = await prisma.agent.create({ data: agentData });
      return toAgentEntity(result);
    } catch (error) {
      console.error('Error creating agent:', error);
      throw error;
    }
  }

  async getAll(): Promise<Agent[]> {
    try {
      const result = await prisma.agent.findMany();
      return result.map(toAgentEntity);
    } catch (error) {
      console.error('Error getting all agents:', error);
      throw error;
    }
  }

  async getById(id: number): Promise<Agent | null> {
    try {
      const result = await prisma.agent.findUnique({ where: { id } });
      return toAgentEntity(result);
    } catch (error) {
      console.error('Error getting agent by ID:', error);
      throw error;
    }
  }

  async update(id: number, agent: Partial<Agent>): Promise<Agent | null> {
    try {
      const { transfers, user, ...agentData } = agent;
      const result = await prisma.agent.update({ where: { id }, data: agentData });
      return toAgentEntity(result);
    } catch (error) {
      console.error('Error updating agent:', error);
      throw error;
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      await prisma.agent.delete({ where: { id } });
      return true;
    } catch (error) {
      console.error('Error deleting agent:', error);
      return false;
    }
  }

  async findByUserId(userId: number): Promise<Agent | null> {
    try {
      const result = await prisma.agent.findUnique({ where: { userId } });
      return toAgentEntity(result);
    } catch (error) {
      console.error('Error finding agent by user ID:', error);
      throw error;
    }
  }

  async findAgentsWithTransfers(): Promise<Agent[]> {
    try {
      const result = await prisma.agent.findMany({
        where: {
          transfers: {
            some: {}
          }
        }
      });
      return result.map(toAgentEntity);
    } catch (error) {
      console.error('Error finding agents with transfers:', error);
      throw error;
    }
  }
}
