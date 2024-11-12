import { Request, Response } from 'express';
import { CreateAdminUseCase } from '../../application/use-cases/admin.use-cases/create-admin.use-case';
import { GetAllAdminsUseCase } from '../../application/use-cases/admin.use-cases/get-all-admins.use-case';
import { GetAdminByIdUseCase } from '../../application/use-cases/admin.use-cases/get-admin-by-id.use-case';
import { FindAdminByUserIdUseCase } from '../../application/use-cases/admin.use-cases/find-admin-by-user-id.use-case';
import { UpdateAdminUseCase } from '../../application/use-cases/admin.use-cases/update-admin.use-case';
import { DeleteAdminUseCase } from '../../application/use-cases/admin.use-cases/delete-admin.use-case';
import { inject, injectable } from 'inversify';

@injectable()
export class AdminController {
    constructor(
        @inject(CreateAdminUseCase) private createAdminUseCase: CreateAdminUseCase,
        @inject(GetAllAdminsUseCase) private getAllAdminsUseCase: GetAllAdminsUseCase,
        @inject(GetAdminByIdUseCase) private getAdminByIdUseCase: GetAdminByIdUseCase,
        @inject(UpdateAdminUseCase) private updateAdminUseCase: UpdateAdminUseCase,
        @inject(FindAdminByUserIdUseCase) private findAdminByUserIdUseCase: FindAdminByUserIdUseCase,
        @inject(DeleteAdminUseCase) private deleteAdminUseCase: DeleteAdminUseCase
    ) { }

    public async createAdmin(req: Request, res: Response): Promise<void> {
        try {
            const admin = await this.createAdminUseCase.execute(req.body);
            res.status(201).json(admin);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }

    public async getAllAdmins(req: Request, res: Response): Promise<void> {
        try {
            const admins = await this.getAllAdminsUseCase.execute();
            res.status(200).json(admins);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }

    public async getAdminById(req: Request, res: Response): Promise<void> {
        try {
            const admin = await this.getAdminByIdUseCase.execute(Number(req.params.id));
            res.status(200).json(admin);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }

    public async findAdminByUserId(req: Request, res: Response): Promise<void> {
        try {
            const userId = Number(req.params.userId);
            const admin = await this.findAdminByUserIdUseCase.execute(userId);
            res.status(200).json(admin);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }

    public async updateAdmin(req: Request, res: Response): Promise<void> {
        try {
            const admin = await this.updateAdminUseCase.execute(Number(req.params.id), req.body);
            res.status(200).json(admin);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }

    public async deleteAdmin(req: Request, res: Response): Promise<void> {
        try {
            const success = await this.deleteAdminUseCase.execute(Number(req.params.id));
            res.status(200).json({ success });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            } else {
                res.status(500).json('Unknown error');
            }
        }
    }
}
