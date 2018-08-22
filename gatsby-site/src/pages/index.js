import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Link from 'gatsby-link'
import Team from '../components/team/team'
import View from '../components/View';
import Partner from '../components/partner/Partner';

const IndexPage = () => (
  <div>
    <View/>
    <Partner/>
    <Team/>
  </div>
)

export default IndexPage
