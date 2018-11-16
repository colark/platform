import React from "react";
import gql from "graphql-tag";
import LandingPage from "./src/components/landing-page/LandingPage";
import AboutPage from "./src/components/AboutPage";
import Unstack from "./src/components/Unstack";
import PhaseZero from "./src/components/PhaseZero";
import Contact from "./src/components/Contact";

const SAY_HELLO = gql`
  {
    hello(name: "Ellie")
  }
`;

const HelloWorld = ({ history, Apollo }) => {
  return (
    <Apollo.Query query={SAY_HELLO}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <div>
            <h1>{data.hello}</h1>
            <button onClick={() => history.push("/")}>click me!</button>
          </div>
        );
      }}
    </Apollo.Query>
  );
};

const App = ({ Shell, Router }) => {
  return (
    <Shell>
      <Router.Switch>
        <Router.Route path="/hello" component={HelloWorld} />
        <Router.Route path="/contact" component={Contact} />
        <Router.Route path="/about" component={AboutPage} />
        <Router.Route path="/unstack" component={Unstack} />
        <Router.Route path="/phasezero" component={PhaseZero} />
        <Router.Route path="/" component={LandingPage} />
      </Router.Switch>
    </Shell>
  );
};

export default { app: App, options: {} };
