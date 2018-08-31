import React from 'react'
import Team from '../components/team/team'
import View from '../components/View'
import BasicPage from '../components/BasicPage'
import BlueWaveBottom from '../components/blue-wave-bottom/BlueWaveBottom'
import Projects from '../components/Projects/index.js'
import Partners from '../components/partners/Partners'


const IndexPage = () => (
  <div>
    <BasicPage>
      <View/>
      <Projects />
      <Partners/>
      <BlueWaveBottom/>
      <Team/>
    </BasicPage>
  </div>
)

export default IndexPage
