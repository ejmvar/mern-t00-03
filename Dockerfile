#  Dockerfile for Node Express Backend api (development)

FROM node:current-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# deps
COPY package*.json ./

RUN npm ci

# Copy app
COPY . .

# Exports
EXPOSE 57018

CMD ["npm","start"]