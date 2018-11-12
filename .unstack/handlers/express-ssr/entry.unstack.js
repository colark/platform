import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { ApolloClient } from 'apollo-client';
import component from './component';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";
import makeShell from "./src/makeShell";
import makeApolloClient from './src/makeApolloClient';

const restoreToCache = (cache) => cache.restore(window.__APOLLO_STATE__);
const apolloClient = makeApolloClient({ uri: window.__API_ENDPOINT__, links: component.options.apolloLinks, restoreToCache })

const App = component.app;

const AppRouter = () => {
  return (
    <BrowserRouter>
      {makeShell(App, { apolloClient })}
    </BrowserRouter>
  );
};

ReactDOM.render(<AppRouter />, document.getElementById("app"));
