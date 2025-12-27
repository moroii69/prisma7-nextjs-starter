## Node.js + Prisma 7 Starter

A minimal starter for building Node.js applications with TypeScript and Prisma 7.

### Setup

1. Install dependencies: `npm install`
1.5. Set up environment: Copy `.env.example` to `.env` and configure `DATABASE_URL`
2. Set up Prisma: `npm run prisma:generate` and `npm run db:push` (custom scripts for `npx prisma generate` and `npx prisma db push`)
3. Run the app: `npm run dev` (development) or `npm run build && npm start` (production)

Note: The build script (`npm run build`) automatically generates the Prisma client before compiling TypeScript.

## Links

- https://www.prisma.io/docs/orm/more/upgrade-guides/upgrading-versions/upgrading-to-prisma-7
- https://www.prisma.io/docs/orm/overview/databases/postgresql