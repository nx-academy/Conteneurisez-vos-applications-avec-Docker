FROM node:12.22-buster-slim

ADD . /api
WORKDIR /api

# CMD [ "node", "app.js" ]
