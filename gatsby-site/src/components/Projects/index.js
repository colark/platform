import React from 'react'
import './projects.css';

const Projects = (props) => {
  return (
    <div className="project-container" id="projects">
        <div className="project">
          <img className="phase-zero-image" src='https://res.cloudinary.com/colark/image/upload/v1534454636/Colark%20Marketing%20Site/Colark_Marketing_Site_PhaseZeroEdited.png'/>
        </div>
        <div className="project">
          <img className="unstack-image" src='http://res.cloudinary.com/colark/image/upload/r_10/v1534365717/Colark%20Marketing%20Site/Unstack.png'/>
        </div>
    </div>
  );
};

export default Projects;