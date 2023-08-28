FROM node:lts-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
WORKDIR /usr/app/islakeheadudown
CMD ["node", "server.js"]