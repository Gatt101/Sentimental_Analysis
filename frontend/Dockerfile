FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies and Angular CLI locally
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 4200

# Use npx to run Angular CLI from node_modules
CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]
