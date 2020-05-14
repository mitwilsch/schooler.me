FROM node:13.12.0-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY . ./


CMD ["npm", "run", "serve"]
