import React from "react";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { ApolloClient } from 'apollo-client';
import component from './component';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";

const apolloClient = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:4000',
  }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

const App = component.app;

const AppRouter = () => {
  return <BrowserRouter><App client={apolloClient} /></BrowserRouter>;
};

ReactDOM.render(<AppRouter />, document.getElementById("app"));
