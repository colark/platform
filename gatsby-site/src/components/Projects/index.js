import React from 'react';
import Link from 'gatsby-link';
import './projects.css';

const Projects = (props) => {
  return (
    <div className="project-container" id="projects">
        <div className="blue-wave-top-container">
            <img src='https://res.cloudinary.com/colark/image/upload/v1535481008/Colark%20Marketing%20Site/blue-wave-top.svg'/>
        </div>
        <div className="project">
          <Link to="/projects/phase0">
            <img className="phase-zero-image" src='https://res.cloudinary.com/colark/image/upload/v1534454636/Colark%20Marketing%20Site/Colark_Marketing_Site_PhaseZeroEdited.png'/>
          </Link>
        </div>
        <div className="project">
          <Link to="/projects/unstack">
            <img className="unstack-image" src='http://res.cloudinary.com/colark/image/upload/r_10/v1534365717/Colark%20Marketing%20Site/Unstack.png'/>
          </Link>
        </div>
    </div>
  );
};
<Link to="/">Go back to the homepage</Link>


export default Projects;
