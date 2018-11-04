import React from 'react'
import WhiteBackground from '../white-overlay';
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
            <div className="hero-container__background--maze">
              {/* <div className="hero-container--inner"> */}
              <WhiteBackground />
              {/* </div> */}
            </div>
          {this.props.children}
        </div>
        <MazeBottom />
      </div>
    );
  };
}

export default HeroPage;
