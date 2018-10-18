import React from 'react';
import Project from '../Project'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

function Projects(props) {

  const PROJECTS = gql`
    {
      projectList {
        name
        icon
        title
        blurb
    }
  }`;

  let Projects = () => {
    return <Query query={PROJECTS}>
     {({ loading, error, data }) => {

       if (loading) return `Loading...`;
       if (error) return `Error" ${error.message}`;

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
        <div className="projects-container" id="projects">
          < Projects />
        </div>
    </div>
  );
}


export default Projects;
