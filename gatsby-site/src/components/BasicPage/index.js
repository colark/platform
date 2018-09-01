import React from 'react'
import ReactNavbar from '../Navbar';
// import Footer from '../footer/Footer';
// TODO: add footer in return statement once it exists in merge

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
