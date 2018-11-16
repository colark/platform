import React from "react";
import Navbar from "../Navbar";
import Footer from "../footer/Footer";

class BasicPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Hero = this.props.Hero;
    const mainStyle = {
      paddingTop: !Hero ? "150px" : "0px"
    };
    return (
      <div className="base-page">
        <div
          className="page-maze--top"
          style={{ background: this.props.backgroundGradient }}
        >
          <div
            className="page-maze--content top"
            style={{ backgroundImage: `url(${this.props.topMazeSrc})` }}
          />
        </div>
        <div style={mainStyle} className="page--main">
          <Navbar
            children={this.props.children}
            backgroundColor={this.props.navBackgroundColor}
          />
          {Hero && <Hero />}
          <div className="content-container">
            <div className="content-container--inner">
              <div className="content-container--background">
                <img
                  className="content-container--angled"
                  src="https://res.cloudinary.com/colark/image/upload/c_crop,h_381,w_1147/v1541636861/Colark%20Marketing%20Site/Body_BG_top_half.svg"
                />
                <div className="content-container--normal" />
              </div>
              {this.props.title && (
                <h1 className="basic-page-header">{this.props.title}</h1>
              )}
              {this.props.children}
            </div>
          </div>
          <div className="page-maze--bottom" style={{ display: this.props.teamMazeBottom}}>
            <div
              className="page-maze--content bottom"
              style={{ backgroundImage: `url(${this.props.bottomMazeSrc})` }}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BasicPage;
