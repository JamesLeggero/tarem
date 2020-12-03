FROM node:14.5.0

WORKDIR /client
COPY package.json /client/
RUN ["yarn", "install"]
COPY . /client/
EXPOSE 3000



CMD ["yarn", "start"]