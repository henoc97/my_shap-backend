import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';

import { CreateUserUseCase } from '../../application/use-cases/user.use-cases/create-user.use-case';
import { GetAllUsersUseCase } from '../../application/use-cases/user.use-cases/get-all-users.use-case';
import { GetUserByIdUseCase } from '../../application/use-cases/user.use-cases/get-user-by-id.use-case';
import { UpdateUserUseCase } from '../../application/use-cases/user.use-cases/update-user.use-case';
import { DeleteUserUseCase } from '../../application/use-cases/user.use-cases/delete-user.use-case';
import { FindUserByEmailUseCase } from '../../application/use-cases/user.use-cases/find-user-by-email.use-case';
import logger from '../../application/helper/logger/logRotation';
import TYPES from '../../application/containers/types/types';

@injectable()
export class UserController {
    constructor(
        @inject(TYPES.CreateUserUseCase) private createUserUseCase: CreateUserUseCase,
        @inject(TYPES.GetAllUsersUseCase) private getAllUsersUseCase: GetAllUsersUseCase,
        @inject(TYPES.GetUserByIdUseCase) private getUserByIdUseCase: GetUserByIdUseCase,
        @inject(TYPES.FindUserByEmailUseCase) private findUserByEmailUseCase: FindUserByEmailUseCase,
        @inject(TYPES.UpdateUserUseCase) private updateUserUseCase: UpdateUserUseCase,
        @inject(TYPES.DeleteUserUseCase) private deleteUserUseCase: DeleteUserUseCase
    ) {
        this.createUser = this.createUser.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);
        this.getUserById = this.getUserById.bind(this);
        this.getUserByEmail = this.getUserByEmail.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    public createUser = async (req: any, res: Response): Promise<void> => {
        console.log("body : " + JSON.stringify(req.body));
        console.log("dtoInstance : " + JSON.stringify(req.dtoInstance));
        try {
            const user = await this.createUserUseCase.execute(req.dtoInstance);
            res.status(201).json(user);
        } catch (error) {
            if (error instanceof Error) {
                logger.error(JSON.stringify({ error: error.message }));
                res.status(500).json({ error: error.message });
            } else {
                logger.error(JSON.stringify({ error: 'An unknown error occurred' }));
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public getAllUsers = async (req: any, res: Response): Promise<void> => {
        try {
            const users = await this.getAllUsersUseCase.execute();
            res.status(200).json(users);
        } catch (error) {
            if (error instanceof Error) {
                logger.error(JSON.stringify({ error: error.message }));
                res.status(500).json({ error: error.message });
            } else {
                logger.error(JSON.stringify({ error: 'An unknown error occurred' }));
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public getUserById = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await this.getUserByIdUseCase.execute(Number(req.params.id));
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                logger.error(JSON.stringify({ error: error.message }));
                res.status(500).json({ error: error.message });
            } else {
                logger.error(JSON.stringify({ error: 'An unknown error occurred' }));
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public getUserByEmail = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = await this.findUserByEmailUseCase.execute(req.params.email);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                logger.error(JSON.stringify({ error: error.message }));
                res.status(500).json({ error: error.message });
            } else {
                logger.error(JSON.stringify({ error: 'An unknown error occurred' }));
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public updateUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const updatedUser = await this.updateUserUseCase.execute(Number(req.params.id), req.body);
            res.status(200).json(updatedUser);
        } catch (error) {
            if (error instanceof Error) {
                logger.error(JSON.stringify({ error: error.message }));
                res.status(500).json({ error: error.message });
            } else {
                logger.error(JSON.stringify({ error: 'An unknown error occurred' }));
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const success = await this.deleteUserUseCase.execute(Number(req.params.id));
            if (success) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                logger.error(JSON.stringify({ error: error.message }));
                res.status(500).json({ error: error.message });
            } else {
                logger.error(JSON.stringify({ error: 'An unknown error occurred' }));
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
}
