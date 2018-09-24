import React from 'react'
import './View.css';
import Illustration from './Background/Illustration.js';

const View = (props) => {
  return (
    <div id="view-container">
      <Illustration/>
      <div className="jumbotron">
          <h1 className="display-3">Go from <strong>zero</strong> to <strong>product-market</strong> fit</h1>
          <p className="lead">(with no throwaway code)</p>
      </div>
    </div>
  );
};

export default View;
