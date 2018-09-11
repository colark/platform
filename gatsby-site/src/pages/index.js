import React from 'react'
import { Route, Switch } from 'react-router';
import BasicPage from '../components/basic-page/BasicPage'
import LandingPage from '../components/landing-page/LandingPage'
import BlogMenu from '../components/blog-menu/BlogMenu'
import BlogArticle from '../components/blog-article/BlogArticle'
import ProjectInfo from '../components/ProjectInfo'

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
