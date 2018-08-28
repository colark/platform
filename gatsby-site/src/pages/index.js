import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Link from 'gatsby-link'
import Team from '../components/team/team'
import View from '../components/View';
import Partners from '../components/partners/Partners';


const IndexPage = () => (
  <div>
    <View/>
    <Projects />
    <Partners/>
    <Team/>
  </div>
)

export default IndexPage
