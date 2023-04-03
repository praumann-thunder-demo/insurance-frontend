FROM node:18-alpine as BUILDER
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY variableReplace.sh /docker-entrypoint.d/
COPY --from=BUILDER /app/dist /usr/share/nginx/html
COPY .env /usr/share/nginx/html
