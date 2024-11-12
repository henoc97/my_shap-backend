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
exports.FindTransactionsByUserIdUseCase = void 0;
const transaction_service_1 = require("../../services/transaction.service");
const inversify_1 = require("inversify");
let FindTransactionsByUserIdUseCase = class FindTransactionsByUserIdUseCase {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    /**
     * Executes the use case to find transactions by user ID.
     * @param userId - The user ID associated with the transactions.
     * @returns A list of transactions associated with the specified user ID.
     */
    async execute(userId) {
        return this.transactionService.findTransactionsByUserId(userId);
    }
};
exports.FindTransactionsByUserIdUseCase = FindTransactionsByUserIdUseCase;
exports.FindTransactionsByUserIdUseCase = FindTransactionsByUserIdUseCase = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], FindTransactionsByUserIdUseCase);
