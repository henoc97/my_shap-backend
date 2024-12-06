import { Request, Response } from 'express';
import { CreateAgentUseCase } from '../../application/use-cases/agent.use-cases/create-agent.use-case';
import { DeleteAgentUseCase } from '../../application/use-cases/agent.use-cases/delete-agent.use-case';
import { FindAgentByUserIdUseCase } from '../../application/use-cases/agent.use-cases/find-agent-by-user-id.use-case';
import { FindAgentsWithTransfersUseCase } from '../../application/use-cases/agent.use-cases/find-agents-with-transfers.use-case';
import { GetAllAgentsUseCase } from '../../application/use-cases/agent.use-cases/get-all-agents.use-case';
import { GetAgentByIdUseCase } from '../../application/use-cases/agent.use-cases/get-agent-by-id.use-case';
import { UpdateAgentUseCase } from '../../application/use-cases/agent.use-cases/update-agent.use-case';
import { inject, injectable } from 'inversify';
import TYPES from '../../application/containers/types/types';

@injectable()
export class AgentController {
    constructor(
        @inject(TYPES.CreateAgentUseCase) private createAgentUseCase: CreateAgentUseCase,
        @inject(TYPES.DeleteAgentUseCase) private deleteAgentUseCase: DeleteAgentUseCase,
        @inject(TYPES.FindAgentByUserIdUseCase) private findAgentByUserIdUseCase: FindAgentByUserIdUseCase,
        @inject(TYPES.FindAgentsWithTransfersUseCase) private findAgentsWithTransfersUseCase: FindAgentsWithTransfersUseCase,
        @inject(TYPES.GetAllAgentsUseCase) private getAllAgentsUseCase: GetAllAgentsUseCase,
        @inject(TYPES.GetAgentByIdUseCase) private getAgentByIdUseCase: GetAgentByIdUseCase,
        @inject(TYPES.UpdateAgentUseCase) private updateAgentUseCase: UpdateAgentUseCase
    ) { }

    public async createAgent(req: Request, res: Response): Promise<void> {
        try {
            const agentDto = req.body;
            const agent = await this.createAgentUseCase.execute(agentDto);
            res.status(201).json(agent);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }

    public async deleteAgent(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);
            const success = await this.deleteAgentUseCase.execute(id);
            res.status(success ? 200 : 404).json({ success });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }

    public async findAgentByUserId(req: Request, res: Response): Promise<void> {
        try {
            const userId = Number(req.params.userId);
            const agent = await this.findAgentByUserIdUseCase.execute(userId);
            res.status(200).json(agent);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }

    public async findAgentsWithTransfers(req: Request, res: Response): Promise<void> {
        try {
            const agents = await this.findAgentsWithTransfersUseCase.execute();
            res.status(200).json(agents);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }

    public async getAllAgents(req: Request, res: Response): Promise<void> {
        try {
            const agents = await this.getAllAgentsUseCase.execute();
            res.status(200).json(agents);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }

    public async getAgentById(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);
            const agent = await this.getAgentByIdUseCase.execute(id);
            res.status(200).json(agent);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }

    public async updateAgent(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);
            const agentData = req.body;
            const agent = await this.updateAgentUseCase.execute(id, agentData);
            res.status(200).json(agent);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }
}
