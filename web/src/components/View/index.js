import React from 'react'
import WhiteBackground from '../white-overlay';

const View = (props) => {
  return (
    <div className="view-container">
      <div className="view-container--inner">
        <h1 className="view-container__title">Build sustainable software at any scale</h1>
        <img className="view-container__background--maze" src="https://res.cloudinary.com/colark/image/upload/v1539949738/Colark%20Marketing%20Site/Group_6.svg"/>
        <WhiteBackground/>
      </div>
    </div>
  );
};

export default View;
