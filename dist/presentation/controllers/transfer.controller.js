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
exports.TransferController = void 0;
const get_all_transfers_use_case_1 = require("../../application/use-cases/transfer.use-cases/get-all-transfers.use-case");
const get_transfer_by_id_use_case_1 = require("../../application/use-cases/transfer.use-cases/get-transfer-by-id.use-case");
const find_transfers_by_status_use_case_1 = require("../../application/use-cases/transfer.use-cases/find-transfers-by-status.use-case");
const find_transfers_by_receiver_id_use_case_1 = require("../../application/use-cases/transfer.use-cases/find-transfers-by-receiver-id.use-case");
const find_transfers_by_sender_id_use_case_1 = require("../../application/use-cases/transfer.use-cases/find-transfers-by-sender-id.use-case");
const update_transfer_use_case_1 = require("../../application/use-cases/transfer.use-cases/update-transfer.use-case");
const delete_transfer_use_case_1 = require("../../application/use-cases/transfer.use-cases/delete-transfer.use-case");
const create_transfer_use_case_1 = require("../../application/use-cases/transfer.use-cases/create-transfer.use-case");
const inversify_1 = require("inversify");
let TransferController = class TransferController {
    constructor(createTransferUseCase, getAllTransfersUseCase, getTransferByIdUseCase, findTransfersByStatusUseCase, findTransfersByReceiverIdUseCase, findTransfersBySenderIdUseCase, updateTransferUseCase, deleteTransferUseCase) {
        this.createTransferUseCase = createTransferUseCase;
        this.getAllTransfersUseCase = getAllTransfersUseCase;
        this.getTransferByIdUseCase = getTransferByIdUseCase;
        this.findTransfersByStatusUseCase = findTransfersByStatusUseCase;
        this.findTransfersByReceiverIdUseCase = findTransfersByReceiverIdUseCase;
        this.findTransfersBySenderIdUseCase = findTransfersBySenderIdUseCase;
        this.updateTransferUseCase = updateTransferUseCase;
        this.deleteTransferUseCase = deleteTransferUseCase;
    }
    async createTransfer(req, res) {
        try {
            const transfer = await this.createTransferUseCase.execute(req.body);
            res.status(201).json(transfer);
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
    async getAllTransfers(req, res) {
        try {
            const transfers = await this.getAllTransfersUseCase.execute();
            res.status(200).json(transfers);
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
    async getTransferById(req, res) {
        try {
            const transfer = await this.getTransferByIdUseCase.execute(Number(req.params.id));
            if (transfer) {
                res.status(200).json(transfer);
            }
            else {
                res.status(404).json({ error: 'Transfer not found' });
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
    async findTransfersByStatus(req, res) {
        try {
            const transfers = await this.findTransfersByStatusUseCase.execute(req.params.status);
            res.status(200).json(transfers);
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
    async findTransfersByReceiverId(req, res) {
        try {
            const transfers = await this.findTransfersByReceiverIdUseCase.execute(Number(req.params.receiverId));
            res.status(200).json(transfers);
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
    async findTransfersBySenderId(req, res) {
        try {
            const transfers = await this.findTransfersBySenderIdUseCase.execute(Number(req.params.senderId));
            res.status(200).json(transfers);
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
    async updateTransfer(req, res) {
        try {
            const updatedTransfer = await this.updateTransferUseCase.execute(Number(req.params.id), req.body);
            res.status(200).json(updatedTransfer);
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
    async deleteTransfer(req, res) {
        try {
            const success = await this.deleteTransferUseCase.execute(Number(req.params.id));
            if (success) {
                res.status(204).send();
            }
            else {
                res.status(404).json({ error: 'Transfer not found' });
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
exports.TransferController = TransferController;
exports.TransferController = TransferController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(create_transfer_use_case_1.CreateTransferUseCase)),
    __param(1, (0, inversify_1.inject)(get_all_transfers_use_case_1.GetAllTransfersUseCase)),
    __param(2, (0, inversify_1.inject)(get_transfer_by_id_use_case_1.GetTransferByIdUseCase)),
    __param(3, (0, inversify_1.inject)(find_transfers_by_status_use_case_1.FindTransfersByStatusUseCase)),
    __param(4, (0, inversify_1.inject)(find_transfers_by_receiver_id_use_case_1.FindTransfersByReceiverIdUseCase)),
    __param(5, (0, inversify_1.inject)(find_transfers_by_sender_id_use_case_1.FindTransfersBySenderIdUseCase)),
    __param(6, (0, inversify_1.inject)(update_transfer_use_case_1.UpdateTransferUseCase)),
    __param(7, (0, inversify_1.inject)(delete_transfer_use_case_1.DeleteTransferUseCase)),
    __metadata("design:paramtypes", [create_transfer_use_case_1.CreateTransferUseCase,
        get_all_transfers_use_case_1.GetAllTransfersUseCase,
        get_transfer_by_id_use_case_1.GetTransferByIdUseCase,
        find_transfers_by_status_use_case_1.FindTransfersByStatusUseCase,
        find_transfers_by_receiver_id_use_case_1.FindTransfersByReceiverIdUseCase,
        find_transfers_by_sender_id_use_case_1.FindTransfersBySenderIdUseCase,
        update_transfer_use_case_1.UpdateTransferUseCase,
        delete_transfer_use_case_1.DeleteTransferUseCase])
], TransferController);
