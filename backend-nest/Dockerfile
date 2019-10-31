FROM node:12-alpine

WORKDIR /backend-nest

COPY ./yarn.lock ./
COPY ./package.json ./

RUN yarn

COPY . .

RUN yarn build