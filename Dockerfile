FROM node:14

WORKDIR /app

# Install dependencies
COPY package*.json ./

RUN npm install

# Bundle APP
COPY . ./

EXPOSE 4000

CMD [ "npm", "start" ]