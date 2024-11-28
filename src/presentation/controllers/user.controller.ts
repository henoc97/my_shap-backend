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
import { validateOtpWithTwilio } from '../../infrastructure/external-services/twilio/validate-otp';
import { error } from 'console';
import { validateOtpCreate } from '../../application/helper/middlewares/validate-otp-create';
import { IsUserByContactUseCase } from '../../application/use-cases/user.use-cases/is-user-by-contact.use-case';

/**
 * UserController handles user-related operations such as creating, retrieving, updating, and deleting users.
 */
@injectable()
export class UserController {
    constructor(
        @inject(TYPES.CreateUserUseCase) private createUserUseCase: CreateUserUseCase,
        @inject(TYPES.GetAllUsersUseCase) private getAllUsersUseCase: GetAllUsersUseCase,
        @inject(TYPES.GetUserByIdUseCase) private getUserByIdUseCase: GetUserByIdUseCase,
        @inject(TYPES.FindUserByEmailUseCase) private findUserByEmailUseCase: FindUserByEmailUseCase,
        @inject(TYPES.IsUserByContactUseCase) private isUserByContactUseCase: IsUserByContactUseCase,
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

    /**
     * Creates a new user after validating the OTP.
     * @param req - The request object containing user data and OTP.
     * @param res - The response object to send the result.
     */
    public createUser = async (req: any, res: Response): Promise<void> => {
        try {
            const contact = `+${req.dtoInstance.countryCode}${req.dtoInstance.contact}`
            validateOtpCreate(req, res, contact, () => this.createUserUseCase.execute(req.dtoInstance))
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

    /**
     * Retrieves all users from the database.
     * @param req - The request object.
     * @param res - The response object to send the list of users.
     */
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

    /**
     * Retrieves a user by their ID.
     * @param req - The request object containing the user ID.
     * @param res - The response object to send the user data.
     */
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

    /**
     * Retrieves a user by their email address.
     * @param req - The request object containing the user's email.
     * @param res - The response object to send the user data.
     */
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

    /**
     * Retrieves a user by their email address.
     * @param req - The request object containing the user's email.
     * @param res - The response object to send the user data.
     */
    public isUserByContact = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await this.isUserByContactUseCase.execute(req.params.contryCode, req.params.contact);
            if (result) {
                res.status(200).json(result);
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

    /**
     * Updates an existing user by their ID.
     * @param req - The request object containing the user ID and updated data.
     * @param res - The response object to send the updated user data.
     */
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

    /**
     * Deletes a user by their ID.
     * @param req - The request object containing the user ID.
     * @param res - The response object to send the result of the deletion.
     */
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
