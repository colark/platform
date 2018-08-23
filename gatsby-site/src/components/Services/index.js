import React from 'react';
import "./services/css";


const Services = (props) => {
    return (
      <div className="services-container">
          <div className="consulting">
            <img className="consulting-image" src='https://res.cloudinary.com/colark/image/upload/v1535060528/Software_Consulting.png'/>
          </div>
          <div className="project">
            <img className="image" src='http://res.cloudinary.com/colark/image/upload/r_10/v1534365717/Colark%20Marketing%20Site/Unstack.png'/>
          </div>
      </div>
    );
  };
  
  export default Services;

