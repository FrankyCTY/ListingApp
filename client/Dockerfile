FROM node:14.14.0-alpine as builder

WORKDIR '/app'

# no need volumns since it is static not dynamic
COPY ./package.json ./
RUN npm install

COPY . .

# NO CMD because we are not running this image outside
RUN npm run build


FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html