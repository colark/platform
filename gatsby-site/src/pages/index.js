import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Link from 'gatsby-link'
import Team from '../components/team/team'
import View from '../components/View';
import ReactNavbar from '../components/Navbar';
import BlueWaveBottom from '../components/blue-wave-bottom/BlueWaveBottom';

const IndexPage = () => (
  <div>
    <ReactNavbar />
    <View/>
    <BlueWaveBottom/>
    <Team/>
  </div>
)

export default IndexPage
