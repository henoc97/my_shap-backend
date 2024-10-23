import express from 'express';
import { AdminController } from './admin.controller';

const router = express.Router();

// Route pour obtenir tous les admins
router.get('/admins', adminController.getAllAdmins);

// Route pour créer un nouvel admin
router.post('/admins', adminController.createAdmin);

// Route pour mettre à jour un admin
router.put('/admins/:id', adminController.updateAdmin);

// Route pour supprimer un admin
router.delete('/admins/:id', adminController.deleteAdmin);



export default router;
