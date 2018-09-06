import React from 'react'
import Team from '../team/team'
import View from '../View';
import ReactNavbar from '../Navbar';
import BlueWaveBottom from '../blue-wave-bottom/BlueWaveBottom';
import Partners from '../partners/Partners';
import Projects from '../Projects';
import Footer from '../footer/Footer';

const LandingPage = () => (
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
);

export default LandingPage
