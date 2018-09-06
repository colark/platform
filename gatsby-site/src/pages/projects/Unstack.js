import React from 'react'
import BasicPage from '../../components/BasicPage'
import ProjectInfo from '../../components/ProjectInfo'
//these two files can become one once we have a global state to tell which image was clicked


const UnstackPage = () => (
  <div>
    <BasicPage>
      <ProjectInfo project="unstack"/>
    </BasicPage>
  </div>
)

export default UnstackPage
