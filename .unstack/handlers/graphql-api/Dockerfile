FROM node:8.5
{{DYNAMIC_ENV_VARS}}
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node entry.js
EXPOSE 4000
