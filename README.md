## node.js + prisma 7 starter

### setup

1. `npm install`
2. Create `.env`: `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/prisma_db"`
3. `docker-compose up -d` (starts pgSQL)
4. `npm run prisma:generate && npm run db:push`
5. `npm run dev`

### docker

The `docker-compose.yml` runs a pgSQL DB in a container. DB persists data between restarts and can be stopped with `docker-compose down`.

## scripts

- `npm run dev` - dev
- `npm run build` - build
- `npm start` - prod
- `npm run prisma:generate` - generate prisma client
- `npm run db:push` - push schema to db