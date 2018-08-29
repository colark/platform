import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Link from 'gatsby-link'
import './View.css';
import Illustration from './Background/Illustration.js';

const View = (props) => {
  return (
    <div id="view-container">
      <Illustration/>
      <Jumbotron>
          <h1 className="display-3">Building <br></br> better software, together.</h1>
        <p className="lead">Through expert guidance and distraction-free tech, working with Colark allows a company to fous on what's unique while also establishing a technical foundation that will scale to millions of users.</p>
      </Jumbotron>
    </div>
  );
};

export default View;
