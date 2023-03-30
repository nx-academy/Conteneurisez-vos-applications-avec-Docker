FROM node:12.22-buster-slim

ADD . /app
WORKDIR /app

CMD [ "node", "app.js" ]
