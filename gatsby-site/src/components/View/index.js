import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Link from 'gatsby-link'
import './View.css';
import Illustration from './Background/Illustration.js';
import ReactNavbar from '../Navbar/index.js';
import Waves from '../Waves/index.js';

const View = (props) => {
  return (
    <div id="page-container">
      <Illustration />
      <ReactNavbar />
      <Jumbotron>
        <div id="title">
          <h1 className="display-3">Building <br></br> better software, together.</h1>
        </div>
        <p className="lead">Teams that consistently perform at the highest levels are able to come together and be unified across the organization - staff, players, coaches, management, and ownership. When everyone is on the same page, trust develops and teams can grow and succeed together.</p>
      </Jumbotron>
      <Waves />
    </div>
  );
};

export default View;