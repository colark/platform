import React from 'react'
import ReactNavbar from '../Navbar';

class BasicPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div>
        <ReactNavbar children={this.props.children}/>
        {this.props.children}
    </div>
  )}
}

export default BasicPage
