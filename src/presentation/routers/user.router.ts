import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { DIContainer } from '../../application/containers/container-inversify/container';
import TYPES from '../../application/containers/types/types';
import { validateDto } from '../../application/helper/middlewares/validate-dto.middleware';
import { UserDTO } from '../dtos/user.dto';

const userRouter = Router();
const userController = DIContainer.getContainer().get<UserController>(TYPES.UserController);

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.get('/email/:email', userController.getUserByEmail);
userRouter.delete('/:id', userController.deleteUser);

userRouter.use(validateDto(UserDTO));

userRouter.post('/', userController.createUser);
userRouter.put('/:id', userController.updateUser);

export default userRouter;
