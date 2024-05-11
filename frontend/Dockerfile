FROM node:alpine3.17 as builder
WORKDIR /frontend
COPY package.json /frontend/package.json
RUN npm install
COPY . .
RUN npm install -g serve
RUN npm run build
# RUN npm run eject