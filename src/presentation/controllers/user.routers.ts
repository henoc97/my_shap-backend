import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

const userController = new UserController();

// Route pour obtenir tous les utilisateurs
router.get('/users', userController.getAllUsers);

// Route pour créer un nouvel utilisateur
router.post('/users', userController.createUser);

// Route pour mettre à jour un utilisateur
router.put('/users/:id', userController.updateUser);

// Route pour supprimer un utilisateur
router.delete('/users/:id', userController.deleteUser);

export default router;
