FROM node:12.22-buster-slim AS base
WORKDIR /api
COPY package*.json ./
COPY . .

FROM base AS build
COPY . /home/node/api
WORKDIR /home/node/api
USER node


FROM build AS prod
CMD [ "node", "./app.js" ]
