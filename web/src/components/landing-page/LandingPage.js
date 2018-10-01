import React from 'react'
import BasicPage from '../BasicPage'
import Team from '../team/team'
import View from '../View';
import BlueWaveBottom from '../blue-wave-bottom/BlueWaveBottom';
import Partners from '../partners/Partners';
import Projects from '../Projects';
// import Subscription from '../Subscription';

const LandingPage = () => (
  <div>
    <BasicPage>
      <View/>
      <Projects/>
      {/* <Subscription/> */}
      <Partners/>
      <BlueWaveBottom/>
      <Team/>
    </BasicPage>
  </div>
);

export default LandingPage
