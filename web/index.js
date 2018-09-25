import React from 'react';
import { Route, Switch } from 'react-router';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import LandingPage from './src/components/landing-page/LandingPage';


const SAY_HELLO = gql`
  {
    hello(name: "Ellie")
  }
`;

const HelloWorld = ({ history }) => {
  return <Query query={SAY_HELLO}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <div>
          <h1>{data.hello}</h1>
          <button onClick={() => history.push('/')}>click me!</button>
        </div>
      );
    }}
  </Query>
}

const App = ({ client }) => {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route path="/hello" component={HelloWorld} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </ApolloProvider>
  );
}

export default { app: App };
