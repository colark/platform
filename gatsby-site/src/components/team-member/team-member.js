import React from 'react'
import Link from 'gatsby-link'

export default function TeamMember(props) {
  console.log("props: ", props);
  return(
      <div>
        <div className="photo-div">
          <img src={props.photo} alt={props.name} className="team-member-photo" />
        </div>
        <h3>{props.name}</h3>
        <h4>{props.position}</h4>
        <Link to={props.email} target="_blank">Email</Link>
        <Link to={props.linkedin} target="_blank">LinkedIn</Link>
      </div>
  );
}
