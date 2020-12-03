FROM node:14.5.0

WORKDIR /client
COPY package.json /client/
RUN ["yarn", "install"]
RUN ["yarn", "start"]