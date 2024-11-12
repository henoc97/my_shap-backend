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
exports.GetFeeByIdUseCase = void 0;
const fee_service_1 = require("../../services/fee.service");
const inversify_1 = require("inversify");
let GetFeeByIdUseCase = class GetFeeByIdUseCase {
    constructor(feeService) {
        this.feeService = feeService;
    }
    /**
     * Executes the use case to retrieve a fee by ID.
     * @param id - The ID of the fee.
     * @returns The fee with the specified ID.
     */
    async execute(id) {
        return this.feeService.getFeeById(id);
    }
};
exports.GetFeeByIdUseCase = GetFeeByIdUseCase;
exports.GetFeeByIdUseCase = GetFeeByIdUseCase = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [fee_service_1.FeeService])
], GetFeeByIdUseCase);
