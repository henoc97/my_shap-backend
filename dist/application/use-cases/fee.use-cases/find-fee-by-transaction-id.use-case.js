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
exports.FindFeeByTransactionIdUseCase = void 0;
const fee_service_1 = require("../../services/fee.service");
const inversify_1 = require("inversify");
let FindFeeByTransactionIdUseCase = class FindFeeByTransactionIdUseCase {
    constructor(feeService) {
        this.feeService = feeService;
    }
    /**
     * Executes the use case to find a fee by transaction ID.
     * @param transactionId - The transaction ID associated with the fee.
     * @returns The fee associated with the specified transaction ID.
     */
    async execute(transactionId) {
        return this.feeService.findFeeByTransactionId(transactionId);
    }
};
exports.FindFeeByTransactionIdUseCase = FindFeeByTransactionIdUseCase;
exports.FindFeeByTransactionIdUseCase = FindFeeByTransactionIdUseCase = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [fee_service_1.FeeService])
], FindFeeByTransactionIdUseCase);
