FROM node:9.11

RUN npm install yarn

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

EXPOSE 3000