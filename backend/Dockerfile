FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000
# required for docker desktop port mapping

CMD ["npm", "start"]