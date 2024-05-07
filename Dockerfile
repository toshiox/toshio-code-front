FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:14-alpine

RUN npm install -g serve

COPY --from=0 /usr/src/app/build /app

CMD ["serve", "-s", "app", "-l", "3000"]

EXPOSE 3000