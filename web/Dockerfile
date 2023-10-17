FROM node:12.22-buster-slim AS base
WORKDIR /web

COPY package*.json ./
RUN npm ci
COPY . .


FROM base AS build
RUN REACT_APP_API_URL=http://localhost:3000 npm run build


FROM nginx:1.17 AS prod
COPY --from=build /web/build /usr/share/nginx/html 