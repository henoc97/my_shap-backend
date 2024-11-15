import { Router } from 'express';
import { AgentController } from '../controllers/agent.controller';
import { DIContainer } from '../../application/containers/container-inversify/container';
import { validateDto } from '../../application/helper/middlewares/validate-dto.middleware';
import { AgentDTO } from '../dtos/agent.dto';

const agentRouter = Router();
const agentController = DIContainer.getContainer().get(AgentController);


agentRouter.use(validateDto(AgentDTO));

agentRouter.post('/', agentController.createAgent);
agentRouter.get('/', agentController.getAllAgents);
agentRouter.get('/:id', agentController.getAgentById);
agentRouter.get('/user/:userId', agentController.findAgentByUserId);
agentRouter.get('/with-transfers', agentController.findAgentsWithTransfers);
agentRouter.put('/:id', agentController.updateAgent);
agentRouter.delete('/:id', agentController.deleteAgent);

export default agentRouter;
