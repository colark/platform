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
          <h1 className="display-3">Go from <strong>zero</strong> to <strong>product-market</strong> fit</h1>
        <p className="lead">(with no throwaway code)</p>
      </Jumbotron>
    </div>
  );
};

export default View;
