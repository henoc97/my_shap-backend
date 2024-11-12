"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
class Admin {
    constructor(id, userId, user) {
        this.createdAt = new Date();
        this.id = id;
        this.userId = userId;
        this.user = user;
    }
}
exports.Admin = Admin;
