FROM node:16.14-alpine as base

WORKDIR /grupoheredia

COPY package*.json /

EXPOSE 3000

FROM base as production

ENV NODE_ENV=production

RUN npm install

COPY . /

RUN npm run build

#CMD [ "yun start" ]

FROM base as dev

ENV NODE_ENV=dev

RUN npm install

COPY . /

#CMD [ "yun dev" ]