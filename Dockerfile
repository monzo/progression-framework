#FROM node:11-alpine AS build
#FROM node:12-alpine AS build
FROM node:12.11.1-alpine AS build
#FROM node:12

RUN apk add --no-cache --virtual .gyp python make g++
RUN npm install -g gatsby-cli yarn

WORKDIR /app
ENV NODE_ENV=production

#COPY package.json yarn.lock ./
COPY package.json ./
#RUN yarn --frozen-lockfile --non-interactive
RUN yarn --non-interactive && yarn cache clean

# The copy command will respect the .dockerignore file
COPY . .
RUN yarn build

EXPOSE 9000

CMD gatbsy serve -H 0.0.0.0
