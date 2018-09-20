import React from 'react';
import Project from '../Project'
import { Link } from 'react-router';
import Subscription from '../Subscription';

function Projects(props) {
  const projectList = [{
      name: "Phase Zero",
      logo: "https://res.cloudinary.com/colark/image/upload/v1534454636/Colark%20Marketing%20Site/Colark_Marketing_Site_PhaseZeroEdited.png"
    },
    {
      name: "Unstack",
      logo: "https://res.cloudinary.com/colark/image/upload/v1534365346/Colark%20Marketing%20Site/Unstack.png"
    }
  ];

  let projects = projectList.map((data, index) => {
    return(
        <div className="project" key={ index }>
            <Project { ...data } />
        </div>
    );
  });

  return(
    <div>
      <div className="blue-wave-top-container">
        <img src='https://res.cloudinary.com/colark/image/upload/v1535481008/Colark%20Marketing%20Site/blue-wave-top.svg' />
      </div>
        <div className="projects-container" id="projects">
          { projects }
        </div>
        <Subscription/>
    </div>
  );
}


export default Projects;
