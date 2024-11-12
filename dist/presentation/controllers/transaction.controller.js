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
exports.TransactionController = void 0;
const create_transaction_use_case_1 = require("../../application/use-cases/transaction.use-cases/create-transaction.use-case");
const get_transaction_by_id_use_case_1 = require("../../application/use-cases/transaction.use-cases/get-transaction-by-id.use-case");
const get_all_transactions_use_case_1 = require("../../application/use-cases/transaction.use-cases/get-all-transactions.use-case");
const find_transactions_by_user_id_use_case_1 = require("../../application/use-cases/transaction.use-cases/find-transactions-by-user-id.use-case");
const update_transaction_use_case_1 = require("../../application/use-cases/transaction.use-cases/update-transaction.use-case");
const delete_transaction_use_case_1 = require("../../application/use-cases/transaction.use-cases/delete-transaction.use-case");
const inversify_1 = require("inversify");
const find_transactions_by_type_use_case_1 = require("../../application/use-cases/transaction.use-cases/find-transactions-by-type.use-case");
let TransactionController = class TransactionController {
    constructor(createTransactionUseCase, getTransactionByIdUseCase, getAllTransactionsUseCase, findTransactionsByUserIdUseCase, findTransactionsByTypeUseCase, updateTransactionUseCase, deleteTransactionUseCase) {
        this.createTransactionUseCase = createTransactionUseCase;
        this.getTransactionByIdUseCase = getTransactionByIdUseCase;
        this.getAllTransactionsUseCase = getAllTransactionsUseCase;
        this.findTransactionsByUserIdUseCase = findTransactionsByUserIdUseCase;
        this.findTransactionsByTypeUseCase = findTransactionsByTypeUseCase;
        this.updateTransactionUseCase = updateTransactionUseCase;
        this.deleteTransactionUseCase = deleteTransactionUseCase;
    }
    async createTransaction(req, res) {
        try {
            const transaction = await this.createTransactionUseCase.execute(req.body);
            res.status(201).json(transaction);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async getTransactionById(req, res) {
        try {
            const transaction = await this.getTransactionByIdUseCase.execute(Number(req.params.id));
            if (transaction) {
                res.status(200).json(transaction);
            }
            else {
                res.status(404).json({ error: 'Transaction not found' });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async getAllTransactions(req, res) {
        try {
            const transactions = await this.getAllTransactionsUseCase.execute();
            res.status(200).json(transactions);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async findTransactionsByUserId(req, res) {
        try {
            const transactions = await this.findTransactionsByUserIdUseCase.execute(Number(req.params.userId));
            res.status(200).json(transactions);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async findTransactionsByType(req, res) {
        try {
            const transactions = await this.findTransactionsByTypeUseCase.execute(req.params.type);
            res.status(200).json(transactions);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async updateTransaction(req, res) {
        try {
            const updatedTransaction = await this.updateTransactionUseCase.execute(Number(req.params.id), req.body);
            res.status(200).json(updatedTransaction);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
    async deleteTransaction(req, res) {
        try {
            const success = await this.deleteTransactionUseCase.execute(Number(req.params.id));
            if (success) {
                res.status(204).send();
            }
            else {
                res.status(404).json({ error: 'Transaction not found' });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
};
exports.TransactionController = TransactionController;
exports.TransactionController = TransactionController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(create_transaction_use_case_1.CreateTransactionUseCase)),
    __param(1, (0, inversify_1.inject)(get_transaction_by_id_use_case_1.GetTransactionByIdUseCase)),
    __param(2, (0, inversify_1.inject)(get_all_transactions_use_case_1.GetAllTransactionsUseCase)),
    __param(3, (0, inversify_1.inject)(find_transactions_by_user_id_use_case_1.FindTransactionsByUserIdUseCase)),
    __param(4, (0, inversify_1.inject)(find_transactions_by_type_use_case_1.FindTransactionsByTypeUseCase)),
    __param(5, (0, inversify_1.inject)(update_transaction_use_case_1.UpdateTransactionUseCase)),
    __param(6, (0, inversify_1.inject)(delete_transaction_use_case_1.DeleteTransactionUseCase)),
    __metadata("design:paramtypes", [create_transaction_use_case_1.CreateTransactionUseCase,
        get_transaction_by_id_use_case_1.GetTransactionByIdUseCase,
        get_all_transactions_use_case_1.GetAllTransactionsUseCase,
        find_transactions_by_user_id_use_case_1.FindTransactionsByUserIdUseCase,
        find_transactions_by_type_use_case_1.FindTransactionsByTypeUseCase,
        update_transaction_use_case_1.UpdateTransactionUseCase,
        delete_transaction_use_case_1.DeleteTransactionUseCase])
], TransactionController);
