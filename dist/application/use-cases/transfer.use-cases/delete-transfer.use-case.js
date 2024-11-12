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
exports.DeleteTransferUseCase = void 0;
const transfer_service_1 = require("../../services/transfer.service");
const inversify_1 = require("inversify");
let DeleteTransferUseCase = class DeleteTransferUseCase {
    constructor(transferService) {
        this.transferService = transferService;
    }
    /**
     * Executes the use case to delete a transfer.
     * @param id - The ID of the transfer to delete.
     * @returns A boolean indicating if the deletion was successful.
     */
    async execute(id) {
        return this.transferService.deleteTransfer(id);
    }
};
exports.DeleteTransferUseCase = DeleteTransferUseCase;
exports.DeleteTransferUseCase = DeleteTransferUseCase = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [transfer_service_1.TransferService])
], DeleteTransferUseCase);
