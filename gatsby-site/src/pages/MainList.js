import React, { Component } from 'react'
import Main from './Main'

class MainList extends Component {
  render() {
    const linksToRender = [
      {
        id: '1',
        description: 'Phase Zero brings your app to market',
        title: 'Phase Zero',
      },
      {
        id: '2',
        description: 'What makes Phase Zero possible',
        title: 'Unstack',
      },
    ]

    return (
      <div>{linksToRender.map(link => <Main key={link.id} link={link} />)}</div>
    )
  }
}

export default MainList