FROM node:14-alpine

WORKDIR /usr/app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install

COPY . .

EXPOSE $PORT_PRODUCER

CMD ["yarn", "run", "dev:producer"]