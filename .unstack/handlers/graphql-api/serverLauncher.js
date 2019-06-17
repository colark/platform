import { ApolloServer } from 'apollo-server-express';
import expressPlayground from 'graphql-playground-middleware-express';
import express from 'express';
const http = require('http');

const launchServer = (config) => {
  const endpoint = config.path || '/';
  const port = config.port || 4000;

  const app = express();

  const playgroundOptions = {
    endpoint,
    subscriptionsEndpoint: endpoint
  };

  app.get('/dev/playground', expressPlayground(playgroundOptions));

  const server = new ApolloServer(config);
  server.applyMiddleware({ app, path: endpoint });

  const httpServer = http.createServer(app);
  server.installSubscriptionHandlers(httpServer);

  httpServer.listen(port, () => {
    console.log(`🚀 Graphql server ready at http://localhost:${port}${server.graphqlPath}`);
    console.log(`🚀 Graphql subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`);
  });
}

export default launchServer;