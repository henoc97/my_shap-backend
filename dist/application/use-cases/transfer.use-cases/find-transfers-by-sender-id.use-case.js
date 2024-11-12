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
exports.FindTransfersBySenderIdUseCase = void 0;
const transfer_service_1 = require("../../services/transfer.service");
const inversify_1 = require("inversify");
let FindTransfersBySenderIdUseCase = class FindTransfersBySenderIdUseCase {
    constructor(transferService) {
        this.transferService = transferService;
    }
    /**
     * Executes the use case to find transfers by sender ID.
     * @param senderId - The sender ID associated with the transfers.
     * @returns A list of transfers associated with the specified sender ID.
     */
    async execute(senderId) {
        return this.transferService.findTransfersBySenderId(senderId);
    }
};
exports.FindTransfersBySenderIdUseCase = FindTransfersBySenderIdUseCase;
exports.FindTransfersBySenderIdUseCase = FindTransfersBySenderIdUseCase = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [transfer_service_1.TransferService])
], FindTransfersBySenderIdUseCase);
