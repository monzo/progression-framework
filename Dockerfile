FROM node:10

RUN mkdir -p /app
WORKDIR /app

ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock
ADD baton.npmrc /app/.npmrc

RUN yarn install --production
RUN rm /app/.npmrc

ADD . /app

CMD [ "./node_modules/.bin/start-ms" ]
