import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Link from 'gatsby-link'
import './View.css';
import Illustration from './Background/Illustration.js';

const View = (props) => {
  return (
    <div>
      <Illustration />
      <Jumbotron>
        <div id="title">
          <h1 className="display-3">Building <br></br> better software, together.</h1>
        </div>
        <p className="lead">Teams that consistently perform at the highest levels are able to come together and be unified across the organization - staff, players, coaches, management, and ownership. When everyone is on the same page, trust develops and teams can grow and succeed together.</p>
        <div className="project-container">
          <img src='https://res.cloudinary.com/colark/image/upload/v1534365334/Colark%20Marketing%20Site/PhaseZero.png'/>
          <img src='https://res.cloudinary.com/colark/image/upload/v1534365346/Colark%20Marketing%20Site/Unstack.png'/>
        </div>
      </Jumbotron>
    </div>
  );
};

export default View;