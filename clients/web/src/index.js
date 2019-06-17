import Entry from "./isomorphic-entry";
import React from "react";
import { ApolloClient } from "apollo-client";
import { BatchHttpLink } from "apollo-link-batch-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { hydrate } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider, createHelmetStore } from "react-safety-helmet";
import "./index.css";

const httpLink = new BatchHttpLink({
  uri: window.__API_ENDPOINT__,
  batchMax: 50,
  batchInterval: 50
});

const restoreToCache = cache => cache.restore(window.__APOLLO_STATE__);

const client = new ApolloClient({
  link: httpLink,
  cache: restoreToCache(new InMemoryCache())
});

const helmetStore = createHelmetStore();

hydrate(
  <BrowserRouter>
    <HelmetProvider store={helmetStore}>
      <ApolloProvider client={client}>
        <Entry />
      </ApolloProvider>
    </HelmetProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
