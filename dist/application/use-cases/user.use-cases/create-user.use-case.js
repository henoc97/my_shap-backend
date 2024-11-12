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
exports.CreateUserUseCase = void 0;
const user_to_entity_1 = require("../../helper/to.entity/user.to.entity");
const user_service_1 = require("../../services/user.service");
const inversify_1 = require("inversify");
let CreateUserUseCase = class CreateUserUseCase {
    constructor(userService) {
        this.userService = userService;
    }
    /**
     * Executes the use case to create a new user.
     * @param userDto - The DTO containing user data.
     * @returns The created user.
     */
    async execute(userDto) {
        const user = (0, user_to_entity_1.toUserEntity)(userDto);
        return this.userService.createUser(user);
    }
};
exports.CreateUserUseCase = CreateUserUseCase;
exports.CreateUserUseCase = CreateUserUseCase = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], CreateUserUseCase);
