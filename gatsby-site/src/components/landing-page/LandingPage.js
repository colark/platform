import React from 'react'
import Team from '../team/team'
import View from '../View';
import BlueWaveBottom from '../blue-wave-bottom/BlueWaveBottom';
import Partners from '../partners/Partners';
import Projects from '../Projects';

const LandingPage = () => (
  <div>
      <View/>
      <Projects/>
      <Partners/>
      <BlueWaveBottom/>
      <Team/>
  </div>
);

export default LandingPage
