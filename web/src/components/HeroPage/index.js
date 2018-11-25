import React from "react";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="hero-container">
        <div className="hero-container--inner">
          <h1 className="hero-container__title">
            Ship sustainably, <span className="avoid-wrap">at any scale</span>
          </h1>
          <h1 className="hero-container__subheader">
            Easily architect, develop, and maintain your platform with Colark's
            software suite.
          </h1>
          <a className="button primary" href="mailto:ellie@colark.com">
            Get in touch
          </a>
        </div>
      </div>
    );
  }
}

export default HeroSection;
