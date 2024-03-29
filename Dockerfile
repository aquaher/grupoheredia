FROM node:alpine as BUILD_IMAGE
WORKDIR /app
COPY package.json ./
# install dependencies
RUN yarn install --frozen-lockfile
COPY . .
# build
RUN yarn build
# remove dev dependencies
RUN npm prune --production
FROM node:alpine
WORKDIR /app
# copy from build image
COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public
COPY /app/next.config.js ./next.config.js
EXPOSE 3000
CMD ["yarn", "start"]
#docker build . -t www.grupoheredia.com.ec
#docker run -d --restart unless-stopped -p 63010:3000 www.grupoheredia.com.ec