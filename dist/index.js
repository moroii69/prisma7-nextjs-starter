"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
async function main() {
    console.log("Connecting to database...");
    const posts = await db_1.prisma.post.findMany();
    console.log("Posts:", posts);
    await db_1.prisma.$disconnect();
}
main().catch(console.error);
