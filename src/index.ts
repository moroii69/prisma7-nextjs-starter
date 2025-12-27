import { prisma } from "./db";

async function main() {
  console.log("Connecting to database...");

  const posts = await prisma.post.findMany();
  console.log("Posts:", posts);

  await prisma.$disconnect();
}

main().catch(console.error);