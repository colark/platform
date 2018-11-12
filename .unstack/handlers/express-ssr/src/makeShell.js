import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { Route, Switch } from 'react-router';
import Shell from './shell';
import gql from 'graphql-tag';

const ROUTE_TO_PAGE = gql`
  {
    router(path: "/hello")
  }
`;

const PageFetcher = (props) => {
  const LoadedPage = props.component;
  return <LoadedPage {...props} />;
}

export default (App, { apolloClient }) => {
  const Apollo = { Query };
  const ConnectedRoute = routeProps => {
    const ConnectedComponent = (componentProps) => {
      return (<PageFetcher {...componentProps} {...routeProps} Apollo={Apollo} />);
    }
    return <Route
      {...routeProps}
      exact
      component={ConnectedComponent}
    />
  }
  return <Route path="/" component={(props) => {
    return (
      <ApolloProvider client={apolloClient}>
        <App {...props} Shell={Shell} Router={{ Route: ConnectedRoute, Switch }} Apollo={{ Query }} />
      </ApolloProvider>
    )
  }} />
}
