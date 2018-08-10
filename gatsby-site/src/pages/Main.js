import React, { Component } from 'react'

class Main extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.link.description} ({this.props.link.title})
        </div>
      </div>
    )
  }
}

export default Main