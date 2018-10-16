FROM node:8-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production

RUN mkdir /data
COPY /data/data.json /data/data.json

RUN mkdir /src
VOLUME ['/usr/src/app/src']

RUN mkdir /public
VOLUME ['/usr/src/app/public']

EXPOSE 8000
CMD ["npm", "start"]