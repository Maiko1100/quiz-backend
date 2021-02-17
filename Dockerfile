FROM node:9.11.1-alpine

RUN apk update --no-cache

WORKDIR /usr/src/app

COPY package*.json ./
# COPY . .
RUN npm install
RUN npm webpack

USER node

CMD npm run start