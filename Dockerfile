FROM node:11-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "start"]