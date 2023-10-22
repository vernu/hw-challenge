FROM node:16-alpine

WORKDIR /app

RUN npm i -g pnpm serve

COPY . .

RUN pnpm i --frozen-lockfile

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "start"]