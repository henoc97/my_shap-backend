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
exports.TransferService = void 0;
const inversify_1 = require("inversify");
let TransferService = class TransferService {
    constructor(transferRepository) {
        this.transferRepository = transferRepository;
    }
    async createTransfer(transfer) {
        return this.transferRepository.create(transfer);
    }
    async getAllTransfers() {
        return this.transferRepository.getAll();
    }
    async getTransferById(id) {
        return this.transferRepository.getById(id);
    }
    async updateTransfer(id, transfer) {
        return this.transferRepository.update(id, transfer);
    }
    async deleteTransfer(id) {
        return this.transferRepository.delete(id);
    }
    async findTransfersBySenderId(senderId) {
        return this.transferRepository.findBySenderId(senderId);
    }
    async findTransfersByStatus(status) {
        return this.transferRepository.findByStatus(status);
    }
    async findTransfersByReceiverId(receiverId) {
        return this.transferRepository.findByReceiverId(receiverId);
    }
};
exports.TransferService = TransferService;
exports.TransferService = TransferService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)("ITransferRepository")),
    __metadata("design:paramtypes", [Object])
], TransferService);
