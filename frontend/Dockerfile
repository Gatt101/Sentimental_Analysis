FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @angular/cli@17.1.3
RUN npm install --legacy-peer-deps


COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
