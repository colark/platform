import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Link from 'gatsby-link'
import Team from '../components/team/team'
import View from '../components/View';
import ReactNavbar from '../components/Navbar';
import BackgroundWave from '../components/BackgroundWave';

const IndexPage = () => (
  <div>
    <ReactNavbar />
    <View/>
    <BackgroundWave />
    <Team/>
  </div>
)

export default IndexPage
