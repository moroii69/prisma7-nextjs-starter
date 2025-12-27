## Next.js + Prisma 7 Starter Template

A minimal starter template for building applications with Next.js and Prisma 7.

### Setup

1. install dependencies: `npm install`
2. set up prisma: `npm run prisma:generate` and `npm run db:push` (custom scripts for `npx prisma generate` and `npx prisma db push`)
3. run the app: `npm run dev`

note: the [build script](https://github.com/moroii69/prisma7-nextjs-starter/blob/main/package.json#:~:text=%22build%22%3A%20%22prisma%20generate%20%26%26%20next%20build%22%2C) (`npm run build`) automatically generates the prisma client before building.

### Node.js Version

For a Node.js version with Docker setup, check the [restructure-to-nodejs branch](https://github.com/moroii69/prisma7-nextjs-starter/tree/restructure-to-nodejs).

### Links

- https://www.prisma.io/docs/orm/more/upgrade-guides/upgrading-versions/upgrading-to-prisma-7
- https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help#best-practices-for-using-prisma-client-in-development