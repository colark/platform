import React from 'react'
import BasicPage from '../BasicPage'
import Team from '../team/team'

const AboutPage = () => (
  <div>
    <BasicPage 
      teamWidth = "auto"
      teamMazeBottom = "none"
    >
      <Team/>
    </BasicPage>
  </div>
);

export default AboutPage
