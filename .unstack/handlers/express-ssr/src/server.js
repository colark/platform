require('isomorphic-fetch');
import React from 'react';
import express from 'express';
import httpProxy from 'http-proxy';
import toHtmlString from './template';
import ReactDOM from 'react-dom/server';
import { ApolloClient } from 'apollo-client';
import { StaticRouter, Route } from 'react-router';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";
import { renderToStringWithData } from 'react-apollo';

export default (App, options) => {
  const app = express()

  //make js bundles be served from this server
  app.use(express.static('web'));
  app.use('*', function(req, res) {
    const apolloClient = new ApolloClient({
      ssrMode: true,
      link: createHttpLink({
        uri: options.API_URL,
      }),
      cache: new InMemoryCache(),
    });

    const context = {};
    const RoutedApp = (
      <StaticRouter location={req.originalUrl} context={context}>
        <Route
          path="/"
          render={(props) => <App {...props} client={apolloClient} />}
        />
      </StaticRouter>
    );

    renderToStringWithData(RoutedApp).then((content) => {
      const initialState = apolloClient.extract();

      res.status(200);
      res.send(toHtmlString(content, initialState));
      res.end();
    });

    const appString = ReactDOM.renderToString(RoutedApp);
  })

  app.listen(3000, function (err){
    console.log("Calling app.listen's callback function.");
    console.log(err);
  })
}
