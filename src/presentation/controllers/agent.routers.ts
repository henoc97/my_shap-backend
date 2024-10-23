import express from 'express';
import { container } from '../../application/containers/repositories.container';
import { AgentController } from './agent.controller';

const router = express.Router();

const agentController = container.get(AgentController);

// Route pour obtenir tous les agents
router.get('/agents', agentController.getAllAgents);

// Route pour créer un nouvel agent
router.post('/agents', agentController.createAgent);

// Route pour mettre à jour un agent
router.put('/agents/:id', agentController.updateAgent);

// Route pour supprimer un agent
router.delete('/agents/:id', agentController.deleteAgent);

export default router;
