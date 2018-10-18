
import React from 'react'
import RocketPyramid from '../RocketPyramid';

const View = (props) => {
  return (
    <div className="view-container">
      <RocketPyramid/>
      <div className="view-container--inner">
          <h1 className="view-container__title">Build sustainable software at any scale</h1>
      </div>
    </div>
  );
};

export default View;
