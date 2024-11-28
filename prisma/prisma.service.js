"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// prisma/prisma.service.ts
const client_1 = require("@prisma/client");
let prisma;
if (process.env.NODE_ENV === 'production') {
    prisma = new client_1.PrismaClient();
}
else {
    if (!global.__prisma) {
        global.__prisma = new client_1.PrismaClient();
    }
    prisma = global.__prisma;
}
exports.default = prisma;
