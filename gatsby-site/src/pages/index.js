import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Link from 'gatsby-link'
import Team from '../components/team/team'
import View from '../components/View';
import ReactNavbar from '../components/Navbar';
import BlueWaveBottom from '../components/blue-wave-bottom/BlueWaveBottom';
import Projects from '../components/Projects/index.js';
import Partners from '../components/partners/Partners';


const IndexPage = () => (
  <div>
    <ReactNavbar />
    <View/>
    <Projects />
    <Partners/>
    <BlueWaveBottom/>
    <Team/>
  </div>
)

export default IndexPage
