import express from 'express';
import { AdminController } from './AdminController';

const router = express.Router();

// Route pour obtenir tous les admins
router.get('/admins', AdminController.getAllAdmins);

// Route pour créer un nouvel admin
router.post('/admins', AdminController.createAdmin);

// Route pour mettre à jour un admin
router.put('/admins/:id', AdminController.updateAdmin);

// Route pour supprimer un admin
router.delete('/admins/:id', AdminController.deleteAdmin);

export default router;
