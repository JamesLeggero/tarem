FROM node:14.5.0

WORKDIR /api
COPY package*.json /api/
RUN npm install
COPY . /client/
EXPOSE 3001



CMD ["node", "server.js"]