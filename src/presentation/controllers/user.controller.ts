import { Request, Response } from 'express';

import { CreateUserUseCase } from '../../application/use-cases/user.use-cases/create-user.use-case';
import { GetAllUsersUseCase } from '../../application/use-cases/user.use-cases/get-all-users.use-case';
import { GetUserByIdUseCase } from '../../application/use-cases/user.use-cases/get-user-by-id.use-case';
import { UpdateUserUseCase } from '../../application/use-cases/user.use-cases/update-user.use-case';
import { DeleteUserUseCase } from '../../application/use-cases/user.use-cases/delete-user.use-case';
import { injectable } from 'inversify';

@injectable()
export class UserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
        private getAllUsersUseCase: GetAllUsersUseCase,
        private getUserByIdUseCase: GetUserByIdUseCase,
        private updateUserUseCase: UpdateUserUseCase,
        private deleteUserUseCase: DeleteUserUseCase
    ) {}

    public async createUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.createUserUseCase.execute(req.body);
            res.status(201).json(user);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
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
                res.status(500).json({ error: error.message });
            } else {
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
                res.status(500).json({ error: error.message });
            } else {
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
                res.status(500).json({ error: error.message });
            } else {
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
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
}
