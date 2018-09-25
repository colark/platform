
import React from 'react'
import RocketPyramid from '../RocketPyramid';

const View = (props) => {
  return (
    <div className="view-container">
      <RocketPyramid/>
      <div className="view-container--inner">
          <h1 className="view-container__title">Go from <strong>zero</strong> to <strong>product-market</strong> fit</h1>
          <p className="view-container__subtitle">(with no throwaway code)</p>
      </div>
    </div>
  );
};

export default View;
