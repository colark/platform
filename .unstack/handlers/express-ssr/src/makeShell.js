import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import { Route, Switch } from 'react-router';

const Shell = ({ children }) => (<div>{children}</div>);

export default (App, { apolloClient }) => {
  const Apollo = { Query };
  const ConnectedRoute = routeProps => {
    const RouteComponent = routeProps.component
    const ConnectedComponent = (componentProps) => <RouteComponent {...componentProps} Apollo={Apollo} />
    return <Route
      {...routeProps}
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
