FROM node:14.15.5-alpine

RUN apk update --no-cache

WORKDIR /usr/src/app

COPY package*.json ./
# COPY . .
RUN npm install
RUN npm run webpack

USER node

CMD npm run start