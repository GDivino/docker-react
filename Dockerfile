FROM node:16-alpine as build
WORKDIR '/app'
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html