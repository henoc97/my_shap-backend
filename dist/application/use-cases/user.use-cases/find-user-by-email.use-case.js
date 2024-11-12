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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserByEmailUseCase = void 0;
const user_service_1 = require("../../services/user.service");
const inversify_1 = require("inversify");
let FindUserByEmailUseCase = class FindUserByEmailUseCase {
    constructor(userService) {
        this.userService = userService;
    }
    /**
     * Executes the use case to find a user by email.
     * @param email - The email of the user to find.
     * @returns The user with the specified email.
     */
    async execute(email) {
        return this.userService.findUserByEmail(email);
    }
};
exports.FindUserByEmailUseCase = FindUserByEmailUseCase;
exports.FindUserByEmailUseCase = FindUserByEmailUseCase = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], FindUserByEmailUseCase);
