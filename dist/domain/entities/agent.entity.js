"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agent = void 0;
class Agent {
    constructor(id, userId, user, transfers = []) {
        this.createdAt = new Date();
        this.transfers = [];
        this.id = id;
        this.userId = userId;
        this.user = user;
        this.transfers = transfers;
    }
}
exports.Agent = Agent;
