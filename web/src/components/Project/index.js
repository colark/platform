import React from 'react'

export default function Project(props) {
  return(
      <a>
        <img src={props.logo} alt={props.name} className="project_background-image" />
      </a>
  );
}
