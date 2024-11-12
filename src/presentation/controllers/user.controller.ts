import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';

import { CreateUserUseCase } from '../../application/use-cases/user.use-cases/create-user.use-case';
import { GetAllUsersUseCase } from '../../application/use-cases/user.use-cases/get-all-users.use-case';
import { GetUserByIdUseCase } from '../../application/use-cases/user.use-cases/get-user-by-id.use-case';
import { UpdateUserUseCase } from '../../application/use-cases/user.use-cases/update-user.use-case';
import { DeleteUserUseCase } from '../../application/use-cases/user.use-cases/delete-user.use-case';
import { FindUserByEmailUseCase } from '../../application/use-cases/user.use-cases/find-user-by-email.use-case';
import logger from '../../application/helper/logger/logRotation';

@injectable()
export class UserController {
    constructor(
        @inject(CreateUserUseCase) private createUserUseCase: CreateUserUseCase,
        @inject(GetAllUsersUseCase) private getAllUsersUseCase: GetAllUsersUseCase,
        @inject(GetUserByIdUseCase) private getUserByIdUseCase: GetUserByIdUseCase,
        @inject(FindUserByEmailUseCase) private findUserByEmailUseCase: FindUserByEmailUseCase,
        @inject(UpdateUserUseCase) private updateUserUseCase: UpdateUserUseCase,
        @inject(DeleteUserUseCase) private deleteUserUseCase: DeleteUserUseCase
    ) { }

    public async createUser(req: any, res: Response): Promise<void> {
        try {
            console.log("object creating user");
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

    public async getAllUsers(req: Request, res: Response): Promise<void> {
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

    public async getUserById(req: Request, res: Response): Promise<void> {
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

    public async getUserByEmail(req: Request, res: Response): Promise<void> {
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

    public async updateUser(req: Request, res: Response): Promise<void> {
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

    public async deleteUser(req: Request, res: Response): Promise<void> {
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
