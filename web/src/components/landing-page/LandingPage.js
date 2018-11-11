import React from 'react'
import BasicPage from '../BasicPage'
// import Team from '../team/team'
import HeroPage from '../HeroPage';
// import Partners from '../partners/Partners';
import Projects from '../Projects';
// import Contact from '../Contact';
// import Subscription from '../Subscription';
import MazeBottom from '../MazeBottom';

const LandingPage = () => (
    <BasicPage navBackgroundColor="transparent">
      {/* <Subscription/> */}
      { /* <Partners/> */ }
      {/* <Contact/> */}
      {/* <Team/> */}
      <HeroPage/>
      <Projects/>
      <MazeBottom/>
    </BasicPage>
);

export default LandingPage
