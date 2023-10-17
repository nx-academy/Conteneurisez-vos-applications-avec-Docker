FROM node:12.22-buster-slim AS base
WORKDIR /api
COPY package*.json ./
COPY . .


FROM base AS build
COPY --from=base ./api /home/node/api
WORKDIR /home/node/api
RUN npm i --production


FROM build AS prod
USER node
CMD [ "node", "./app.js" ]
