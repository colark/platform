import React from 'react'
import ReactNavbar from '../Navbar';
import Footer from '../footer/Footer';

class BasicPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div>
      <div className="body-container-minus-footer">
        <ReactNavbar children={this.props.children}/>
        {this.props.children}
      </div>
        <Footer/>
    </div>
  )}
}

export default BasicPage
