import React from "react";

class HeroPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="hero-container">
        <div className="hero-container--inner">
          <h1 className="hero-container__title">
            Build sustainable software at any scale
          </h1>
        </div>
      </div>
    );
  }
}

export default HeroPage;
