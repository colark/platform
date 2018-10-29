import React from 'react'
import Navbar from '../Navbar';
import Footer from '../footer/Footer';

class BasicPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div>
      <div className="body-container-minus-footer">
        <Navbar children={this.props.children} backgroundColor={this.props.navBackgroundColor}/>
        {this.props.children}
        <img className="body-lower-half" src="https://res.cloudinary.com/colark/image/upload/v1540495663/Colark%20Marketing%20Site/downillustration.svg"/>
      </div>
        <Footer/>
    </div>
  )}
}

export default BasicPage
