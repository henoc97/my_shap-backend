"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const create_admin_use_case_1 = require("../../application/use-cases/admin.use-cases/create-admin.use-case");
const get_all_admins_use_case_1 = require("../../application/use-cases/admin.use-cases/get-all-admins.use-case");
const get_admin_by_id_use_case_1 = require("../../application/use-cases/admin.use-cases/get-admin-by-id.use-case");
const find_admin_by_user_id_use_case_1 = require("../../application/use-cases/admin.use-cases/find-admin-by-user-id.use-case");
const update_admin_use_case_1 = require("../../application/use-cases/admin.use-cases/update-admin.use-case");
const delete_admin_use_case_1 = require("../../application/use-cases/admin.use-cases/delete-admin.use-case");
const inversify_1 = require("inversify");
let AdminController = class AdminController {
    constructor(createAdminUseCase, getAllAdminsUseCase, getAdminByIdUseCase, updateAdminUseCase, findAdminByUserIdUseCase, deleteAdminUseCase) {
        this.createAdminUseCase = createAdminUseCase;
        this.getAllAdminsUseCase = getAllAdminsUseCase;
        this.getAdminByIdUseCase = getAdminByIdUseCase;
        this.updateAdminUseCase = updateAdminUseCase;
        this.findAdminByUserIdUseCase = findAdminByUserIdUseCase;
        this.deleteAdminUseCase = deleteAdminUseCase;
    }
    async createAdmin(req, res) {
        try {
            const admin = await this.createAdminUseCase.execute(req.body);
            res.status(201).json(admin);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            }
            else {
                res.status(500).json('Unknown error');
            }
        }
    }
    async getAllAdmins(req, res) {
        try {
            const admins = await this.getAllAdminsUseCase.execute();
            res.status(200).json(admins);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            }
            else {
                res.status(500).json('Unknown error');
            }
        }
    }
    async getAdminById(req, res) {
        try {
            const admin = await this.getAdminByIdUseCase.execute(Number(req.params.id));
            res.status(200).json(admin);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            }
            else {
                res.status(500).json('Unknown error');
            }
        }
    }
    async findAdminByUserId(req, res) {
        try {
            const userId = Number(req.params.userId);
            const admin = await this.findAdminByUserIdUseCase.execute(userId);
            res.status(200).json(admin);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            }
            else {
                res.status(500).json('Unknown error');
            }
        }
    }
    async updateAdmin(req, res) {
        try {
            const admin = await this.updateAdminUseCase.execute(Number(req.params.id), req.body);
            res.status(200).json(admin);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            }
            else {
                res.status(500).json('Unknown error');
            }
        }
    }
    async deleteAdmin(req, res) {
        try {
            const success = await this.deleteAdminUseCase.execute(Number(req.params.id));
            res.status(200).json({ success });
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json(`Error: ${error.message}`);
            }
            else {
                res.status(500).json('Unknown error');
            }
        }
    }
};
exports.AdminController = AdminController;
exports.AdminController = AdminController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(create_admin_use_case_1.CreateAdminUseCase)),
    __param(1, (0, inversify_1.inject)(get_all_admins_use_case_1.GetAllAdminsUseCase)),
    __param(2, (0, inversify_1.inject)(get_admin_by_id_use_case_1.GetAdminByIdUseCase)),
    __param(3, (0, inversify_1.inject)(update_admin_use_case_1.UpdateAdminUseCase)),
    __param(4, (0, inversify_1.inject)(find_admin_by_user_id_use_case_1.FindAdminByUserIdUseCase)),
    __param(5, (0, inversify_1.inject)(delete_admin_use_case_1.DeleteAdminUseCase)),
    __metadata("design:paramtypes", [create_admin_use_case_1.CreateAdminUseCase,
        get_all_admins_use_case_1.GetAllAdminsUseCase,
        get_admin_by_id_use_case_1.GetAdminByIdUseCase,
        update_admin_use_case_1.UpdateAdminUseCase,
        find_admin_by_user_id_use_case_1.FindAdminByUserIdUseCase,
        delete_admin_use_case_1.DeleteAdminUseCase])
], AdminController);
