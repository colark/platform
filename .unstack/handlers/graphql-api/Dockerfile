FROM node:8.5
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node entry.js
EXPOSE 4000
