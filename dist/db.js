"use strict";
// Refer to this URL for why we use the below syntax: https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help#recommended-solution
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("../src/generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const adapter = new adapter_pg_1.PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const globalForPrisma = global;
exports.prisma = globalForPrisma.prisma ||
    new client_1.PrismaClient({
        adapter,
    });
if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = exports.prisma;
