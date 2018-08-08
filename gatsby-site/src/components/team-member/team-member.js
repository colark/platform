import React from 'react'
import Link from 'gatsby-link'
// import Img from 'gatsby-image'
import Mailto from 'react-mailto';
import styles from "./team-member.css"

export default function TeamMember(props) {
  console.log("props: ", props);
  return(
    <div className="team-member">
      <div className="team-member__photo-div">
        <img src={props.data.photo} alt={props.data.name} className="team-member__photo" />
      </div>
      <div className="team-member__info">
        <h3 className="team-member__name">{props.data.name}</h3>
        <h4 className="team-member__title">{props.data.position}</h4>
        <Mailto className="team-member__email" email={props.data.email} >Email</Mailto>
        <Link className="team-member__linkedin" to={props.data.linkedin} target="__blank">LinkedIn</Link>
      </div>
  </div>
  );
}
