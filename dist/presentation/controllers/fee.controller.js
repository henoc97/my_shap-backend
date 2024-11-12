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
exports.FeeController = void 0;
const create_fee_use_case_1 = require("../../application/use-cases/fee.use-cases/create-fee.use-case");
const delete_fee_use_case_1 = require("../../application/use-cases/fee.use-cases/delete-fee.use-case");
const find_fee_by_transaction_id_use_case_1 = require("../../application/use-cases/fee.use-cases/find-fee-by-transaction-id.use-case");
const get_fee_by_id_use_case_1 = require("../../application/use-cases/fee.use-cases/get-fee-by-id.use-case");
const update_fee_use_case_1 = require("../../application/use-cases/fee.use-cases/update-fee.use-case");
const inversify_1 = require("inversify");
let FeeController = class FeeController {
    constructor(createFeeUseCase, deleteFeeUseCase, findFeeByTransactionIdUseCase, getFeeByIdUseCase, updateFeeUseCase) {
        this.createFeeUseCase = createFeeUseCase;
        this.deleteFeeUseCase = deleteFeeUseCase;
        this.findFeeByTransactionIdUseCase = findFeeByTransactionIdUseCase;
        this.getFeeByIdUseCase = getFeeByIdUseCase;
        this.updateFeeUseCase = updateFeeUseCase;
    }
    async createFee(req, res) {
        try {
            const feeDto = req.body;
            const fee = await this.createFeeUseCase.execute(feeDto);
            res.status(201).json(fee);
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
    async deleteFee(req, res) {
        try {
            const id = Number(req.params.id);
            const success = await this.deleteFeeUseCase.execute(id);
            res.status(success ? 200 : 404).json({ success });
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
    async findFeeByTransactionId(req, res) {
        try {
            const transactionId = Number(req.params.transactionId);
            const fee = await this.findFeeByTransactionIdUseCase.execute(transactionId);
            res.status(200).json(fee);
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
    async getFeeById(req, res) {
        try {
            const id = Number(req.params.id);
            const fee = await this.getFeeByIdUseCase.execute(id);
            res.status(200).json(fee);
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
    async updateFee(req, res) {
        try {
            const id = Number(req.params.id);
            const feeData = req.body;
            const fee = await this.updateFeeUseCase.execute(id, feeData);
            res.status(200).json(fee);
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
exports.FeeController = FeeController;
exports.FeeController = FeeController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(create_fee_use_case_1.CreateFeeUseCase)),
    __param(1, (0, inversify_1.inject)(delete_fee_use_case_1.DeleteFeeUseCase)),
    __param(2, (0, inversify_1.inject)(find_fee_by_transaction_id_use_case_1.FindFeeByTransactionIdUseCase)),
    __param(3, (0, inversify_1.inject)(get_fee_by_id_use_case_1.GetFeeByIdUseCase)),
    __param(4, (0, inversify_1.inject)(update_fee_use_case_1.UpdateFeeUseCase)),
    __metadata("design:paramtypes", [create_fee_use_case_1.CreateFeeUseCase,
        delete_fee_use_case_1.DeleteFeeUseCase,
        find_fee_by_transaction_id_use_case_1.FindFeeByTransactionIdUseCase,
        get_fee_by_id_use_case_1.GetFeeByIdUseCase,
        update_fee_use_case_1.UpdateFeeUseCase])
], FeeController);
