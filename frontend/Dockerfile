FROM node:12-alpine

WORKDIR /frontend

COPY ./yarn.lock ./
COPY ./package.json ./

RUN yarn

COPY . .

RUN yarn build