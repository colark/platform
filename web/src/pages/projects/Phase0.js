import React from 'react'
import BasicPage from '../../components/BasicPage'
import ProjectInfo from '../../components/ProjectInfo'
//these two files can become one once we have a global state

const PhaseZeroPage = () => (
  <div>
    <BasicPage>
      <ProjectInfo project="phase0"/>
    </BasicPage>
  </div>
)

export default PhaseZeroPage
