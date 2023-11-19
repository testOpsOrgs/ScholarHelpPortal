FROM node:slim

WORKDIR /usr/src/backend

COPY package.json ./

RUN npm install

COPY  . .
COPY .env .

EXPOSE 4000

CMD [ "sh", "-c" , "node app.js" ]