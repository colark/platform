import React from "react";
import BasicPage from "../BasicPage";
import HeroPage from "../HeroPage";
import Projects from "../Projects";
import Partners from "../partners/Partners";
import Contact from "../Contact";
import Subscription from "../Subscription";
import MazeBottom from "../MazeBottom";

const LandingPage = () => (
  <BasicPage
    backgroundGradient="linear-gradient(180deg, #5C6DFF 0%, #FFFFFF 73.73%)"
    topMazeSrc="https://res.cloudinary.com/colark/image/upload/v1539949738/Colark%20Marketing%20Site/Group_6.svg"
    bottomMazeSrc="https://res.cloudinary.com/colark/image/upload/v1540495663/Colark%20Marketing%20Site/downillustration.svg"
    navBackgroundColor="transparent"
    Hero={HeroPage}
  >
    <Projects />
  </BasicPage>
);

export default LandingPage;
