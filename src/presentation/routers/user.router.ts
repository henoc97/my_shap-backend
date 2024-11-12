import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { container } from '../../application/containers/main.container';

const userRouter = Router();
const userController = container.get<UserController>(UserController);

userRouter.post('/', userController.createUser);
userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.get('/email/:email', userController.getUserByEmail);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

export default userRouter;
