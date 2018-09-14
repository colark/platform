import React from 'react';
import { Route, Switch } from 'react-router';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Index from './src/components/App';


// const SAY_HELLO = gql`
//   {
//     hello(name: "Ellie")
//   }
// `;
//
// const HelloWorld = () => {
//   return <Query query={SAY_HELLO}>
//     {({ loading, error, data }) => {
//       if (loading) return 'Loading...';
//       if (error) return `Error! ${error.message}`;
//
//       return (
//         <h1>{data.hello}</h1>
//       );
//     }}
//   </Query>
// }

const App = ({ client }) => {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </ApolloProvider>
  );
}

export default { app: App };
