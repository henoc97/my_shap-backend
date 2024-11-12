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
exports.DeleteFeeUseCase = void 0;
const fee_service_1 = require("../../services/fee.service");
const inversify_1 = require("inversify");
let DeleteFeeUseCase = class DeleteFeeUseCase {
    constructor(feeService) {
        this.feeService = feeService;
    }
    /**
     * Executes the use case to delete a fee.
     * @param id - The ID of the fee to delete.
     * @returns A boolean indicating if the deletion was successful.
     */
    async execute(id) {
        return this.feeService.deleteFee(id);
    }
};
exports.DeleteFeeUseCase = DeleteFeeUseCase;
exports.DeleteFeeUseCase = DeleteFeeUseCase = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [fee_service_1.FeeService])
], DeleteFeeUseCase);
