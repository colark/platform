import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Link from 'gatsby-link'
import Team from '../components/team/team'
import View from '../components/View';

const IndexPage = () => (
  <div>
    <View/>
    <Projects />
    <Team/>
  </div>
)

export default IndexPage
