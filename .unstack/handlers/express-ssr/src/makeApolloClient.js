import { onError } from "apollo-link-error";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { BatchHttpLink } from "apollo-link-batch-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const makeApolloClient = ({
  uri,
  links,
  ssrMode = false,
  restoreToCache = cache => cache
}) => {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  let linkArray = links ? [links] : [];
  linkArray = linkArray.concat([
    errorLink,
    new BatchHttpLink({
      uri,
      batchMax: 50,
      batchInterval: 50
    })
  ]);

  const link = ApolloLink.from(linkArray);

  const apolloClient = new ApolloClient({
    ssrMode,
    link,
    cache: restoreToCache(new InMemoryCache())
  });

  return apolloClient;
};

export default makeApolloClient;
