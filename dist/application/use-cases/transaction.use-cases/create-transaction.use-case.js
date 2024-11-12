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
exports.CreateTransactionUseCase = void 0;
const transaction_to_entity_1 = require("../../helper/to.entity/transaction.to.entity");
const transaction_service_1 = require("../../services/transaction.service");
const inversify_1 = require("inversify");
let CreateTransactionUseCase = class CreateTransactionUseCase {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    /**
     * Executes the use case to create a new transaction.
     * @param transactionDto - The DTO containing transaction data.
     * @returns The created transaction.
     */
    async execute(transactionDto) {
        const transaction = (0, transaction_to_entity_1.toTransactionEntity)(transactionDto);
        return this.transactionService.createTransaction(transaction);
    }
};
exports.CreateTransactionUseCase = CreateTransactionUseCase;
exports.CreateTransactionUseCase = CreateTransactionUseCase = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], CreateTransactionUseCase);
