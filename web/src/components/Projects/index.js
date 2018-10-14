import React from 'react';
import Project from '../Project'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

function Projects(props) {

  const PROJECTS = gql`
    {
      projectList {
        name
        logo
    }
  }`;

  let Projects = () => {
    return <Query query={PROJECTS}>
     {({ loading, error, data }) => {

       if (loading) return `Loading...`;
       if (error) return `Error" ${error.message}`; 
        console.log(data.projectList);
        
       return data.projectList.map((data, index) => {
        return (
          <div className="project" key={index}>
            <Project {...data} />
          </div>);
       });
    }}
     </Query>
  }

  return(
    <div>
      <div className="blue-wave-top-container">
        <img className="blue-wave-top-container__image" src='https://res.cloudinary.com/colark/image/upload/v1535481008/Colark%20Marketing%20Site/blue-wave-top.svg' />
      </div>
        <div className="projects-container" id="projects">
          < Projects />
        </div>
    </div>
  );
}


export default Projects;
