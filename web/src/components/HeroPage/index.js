import React from 'react'
// import WhiteBackground from '../white-overlay';
import MazeBottom from '../MazeBottom';
import MazeBackground from '../MazeBackground';

class HeroPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="hero-container">
        <h1 className="hero-container__title">Build sustainable software at any scale</h1>

        <img className="hero-container__background--maze" src="https://res.cloudinary.com/colark/image/upload/v1539949738/Colark%20Marketing%20Site/Group_6.svg"/>
        <div className="hero-container--inner">


              {/* <div className="hero-container--inner"> */}
              {/* <WhiteBackground /> */}
              {/* </div> */}
          {/* {this.props.children} */}
        </div>
        </div>
      </div>
    );
  };
}

export default HeroPage;
