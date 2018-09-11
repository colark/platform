import React from 'react'
import { Route, Switch } from 'react-router';
import BasicPage from '../components/basic-page/BasicPage'
import LandingPage from '../components/landing-page/LandingPage'

const IndexPage = () => (
  <div>
    <Switch>
      <BasicPage>
        <LandingPage/>
      </BasicPage>
    </Switch>
  </div>
);

export default IndexPage
