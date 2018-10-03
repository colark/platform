import React from 'react';
import gql from 'graphql-tag';
import LandingPage from './src/components/landing-page/LandingPage';

// const TEAM = gql` {
//   team(name: "Ellie Day")
// }
// `;

const resolvers = {
  Query: {
    team: () => {
      return TEAM;
    }
  },
};

const HelloWorld = ({ history, Apollo }) => {
  return <Apollo.Query query={TEAM}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <div>
          <h1>{data.team}</h1>
          <button onClick={() => history.push('/')}>click me!</button>
        </div>
      );
    }}
  </Apollo.Query>
}

const App = ({ Shell, Router }) => {
  return (
    <Shell>
      <Router.Switch>
        <Router.Route path="/hello" component={HelloWorld} />
        <Router.Route path="/" component={LandingPage} />
      </Router.Switch>
    </Shell>
  );
}

export default { app: App };
