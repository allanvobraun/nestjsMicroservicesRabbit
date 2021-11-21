FROM node:14-alpine

WORKDIR /usr/app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install

COPY . .
EXPOSE $PORT_CONSUMER

CMD ["yarn", "run", "dev:consumer"]