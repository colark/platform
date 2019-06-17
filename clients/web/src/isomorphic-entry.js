import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import AboutPage from "./components/AboutPage";
import Unstack from "./components/Unstack";
import PhaseZero from "./components/PhaseZero";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Switch>
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={AboutPage} />
      <Route path="/unstack" component={Unstack} />
      <Route path="/phasezero" component={PhaseZero} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
};

const Entry = () => <App />;

export default Entry;
