import { Router } from 'express';
import { AgentController } from '../controllers/agent.controller';
import { container } from '../../application/containers/main.container';

const agentRouter = Router();
const agentController = container.get(AgentController);

agentRouter.post('/', agentController.createAgent);
agentRouter.get('/', agentController.getAllAgents);
agentRouter.get('/:id', agentController.getAgentById);
agentRouter.get('/user/:userId', agentController.findAgentByUserId);
agentRouter.get('/with-transfers', agentController.findAgentsWithTransfers);
agentRouter.put('/:id', agentController.updateAgent);
agentRouter.delete('/:id', agentController.deleteAgent);

export default agentRouter;
