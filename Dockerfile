FROM node:18-slim

WORKDIR /usr

COPY package*.json ./

RUN npm install --only=production

COPY . ./

EXPOSE 3000

# Run the web service on container startup.
CMD [ "node", "./example/express.js" ]