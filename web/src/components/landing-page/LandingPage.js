import React from 'react'
import BasicPage from '../BasicPage'
// import Team from '../team/team'
import View from '../View';
// import Partners from '../partners/Partners';
import Projects from '../Projects';
// import Contact from '../Contact';
// import Subscription from '../Subscription';

const LandingPage = () => (
  <div>
    <BasicPage navBackgroundColor="transparent">
      <View/>
      <Projects/>
      {/* <Subscription/> */}
      { /* <Partners/> */ }
      {/* <Contact/> */}
      {/* <Team/> */}
    </BasicPage>
  </div>
);

export default LandingPage
