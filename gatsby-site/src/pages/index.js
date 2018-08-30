import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Link from 'gatsby-link'
import Team from '../components/team/team'
import View from '../components/View';
import ReactNavbar from '../components/Navbar';
import BlueWaveBottom from '../components/blue-wave-bottom/BlueWaveBottom';
import Partners from '../components/partners/Partners';
import Projects from '../components/Projects/index.js';
import Footer from '../components/footer/Footer.js';

const IndexPage = () => (
  <div>
    <div className="body-container-minus-footer">
      <ReactNavbar />
      <View/>
      <Projects />
      <Partners/>
      <BlueWaveBottom/>
      <Team/>
    </div>
    <Footer/>
  </div>

export default IndexPage
