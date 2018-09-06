import React from 'react'
import Link from 'gatsby-link'

export default function Project(props) {
  return(
      <a>
        <img src={props.logo} alt={props.name} className="project_background-image" />
      </a>
  );
}
