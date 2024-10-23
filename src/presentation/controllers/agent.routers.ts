import express from 'express';
import { AgentController } from './AgentController';

const router = express.Router();

// Route pour obtenir tous les agents
router.get('/agents', AgentController.getAllAgents);

// Route pour créer un nouvel agent
router.post('/agents', AgentController.createAgent);

// Route pour mettre à jour un agent
router.put('/agents/:id', AgentController.updateAgent);

// Route pour supprimer un agent
router.delete('/agents/:id', AgentController.deleteAgent);

export default router;
