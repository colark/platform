import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Link from 'gatsby-link'
import Team from '../components/team/team'
import View from '../components/View';
import Projects from '../components/Projects/index.js';

const IndexPage = () => (
  <div>
    <View/>
    <Projects />
    <Team/>
  </div>
)

export default IndexPage
