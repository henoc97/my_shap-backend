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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const inversify_1 = require("inversify");
const create_user_use_case_1 = require("../../application/use-cases/user.use-cases/create-user.use-case");
const get_all_users_use_case_1 = require("../../application/use-cases/user.use-cases/get-all-users.use-case");
const get_user_by_id_use_case_1 = require("../../application/use-cases/user.use-cases/get-user-by-id.use-case");
const update_user_use_case_1 = require("../../application/use-cases/user.use-cases/update-user.use-case");
const delete_user_use_case_1 = require("../../application/use-cases/user.use-cases/delete-user.use-case");
const find_user_by_email_use_case_1 = require("../../application/use-cases/user.use-cases/find-user-by-email.use-case");
const logRotation_1 = __importDefault(require("../../application/helper/logger/logRotation"));
let UserController = class UserController {
    constructor(createUserUseCase, getAllUsersUseCase, getUserByIdUseCase, findUserByEmailUseCase, updateUserUseCase, deleteUserUseCase) {
        this.createUserUseCase = createUserUseCase;
        this.getAllUsersUseCase = getAllUsersUseCase;
        this.getUserByIdUseCase = getUserByIdUseCase;
        this.findUserByEmailUseCase = findUserByEmailUseCase;
        this.updateUserUseCase = updateUserUseCase;
        this.deleteUserUseCase = deleteUserUseCase;
    }
    async createUser(req, res) {
        try {
            console.log("object creating user");
            const user = await this.createUserUseCase.execute(req.dtoInstance);
            res.status(201).json(user);
        }
        catch (error) {
            if (error instanceof Error) {
                logRotation_1.default.error(JSON.stringify({ error: error.message }));
                res.status(500).json({ error: error.message });
            }
            else {
                logRotation_1.default.error(JSON.stringify({ error: 'An unknown error occurred' }));
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async getAllUsers(req, res) {
        try {
            const users = await this.getAllUsersUseCase.execute();
            res.status(200).json(users);
        }
        catch (error) {
            if (error instanceof Error) {
                logRotation_1.default.error(JSON.stringify({ error: error.message }));
                res.status(500).json({ error: error.message });
            }
            else {
                logRotation_1.default.error(JSON.stringify({ error: 'An unknown error occurred' }));
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async getUserById(req, res) {
        try {
            const user = await this.getUserByIdUseCase.execute(Number(req.params.id));
            if (user) {
                res.status(200).json(user);
            }
            else {
                res.status(404).json({ error: 'User not found' });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                logRotation_1.default.error(JSON.stringify({ error: error.message }));
                res.status(500).json({ error: error.message });
            }
            else {
                logRotation_1.default.error(JSON.stringify({ error: 'An unknown error occurred' }));
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async getUserByEmail(req, res) {
        try {
            const user = await this.findUserByEmailUseCase.execute(req.params.email);
            if (user) {
                res.status(200).json(user);
            }
            else {
                res.status(404).json({ error: 'User not found' });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                logRotation_1.default.error(JSON.stringify({ error: error.message }));
                res.status(500).json({ error: error.message });
            }
            else {
                logRotation_1.default.error(JSON.stringify({ error: 'An unknown error occurred' }));
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async updateUser(req, res) {
        try {
            const updatedUser = await this.updateUserUseCase.execute(Number(req.params.id), req.body);
            res.status(200).json(updatedUser);
        }
        catch (error) {
            if (error instanceof Error) {
                logRotation_1.default.error(JSON.stringify({ error: error.message }));
                res.status(500).json({ error: error.message });
            }
            else {
                logRotation_1.default.error(JSON.stringify({ error: 'An unknown error occurred' }));
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async deleteUser(req, res) {
        try {
            const success = await this.deleteUserUseCase.execute(Number(req.params.id));
            if (success) {
                res.status(204).send();
            }
            else {
                res.status(404).json({ error: 'User not found' });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                logRotation_1.default.error(JSON.stringify({ error: error.message }));
                res.status(500).json({ error: error.message });
            }
            else {
                logRotation_1.default.error(JSON.stringify({ error: 'An unknown error occurred' }));
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
};
exports.UserController = UserController;
exports.UserController = UserController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(create_user_use_case_1.CreateUserUseCase)),
    __param(1, (0, inversify_1.inject)(get_all_users_use_case_1.GetAllUsersUseCase)),
    __param(2, (0, inversify_1.inject)(get_user_by_id_use_case_1.GetUserByIdUseCase)),
    __param(3, (0, inversify_1.inject)(find_user_by_email_use_case_1.FindUserByEmailUseCase)),
    __param(4, (0, inversify_1.inject)(update_user_use_case_1.UpdateUserUseCase)),
    __param(5, (0, inversify_1.inject)(delete_user_use_case_1.DeleteUserUseCase)),
    __metadata("design:paramtypes", [create_user_use_case_1.CreateUserUseCase,
        get_all_users_use_case_1.GetAllUsersUseCase,
        get_user_by_id_use_case_1.GetUserByIdUseCase,
        find_user_by_email_use_case_1.FindUserByEmailUseCase,
        update_user_use_case_1.UpdateUserUseCase,
        delete_user_use_case_1.DeleteUserUseCase])
], UserController);
