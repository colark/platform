import React from 'react'
import Link from 'gatsby-link'
// import Img from 'gatsby-image'
import Mailto from 'react-mailto';
import styles from "./team-member.css"

export default function TeamMember(props) {
  return(
    <div className="team-member">
      <div className={props.data.className}>
        <div className="tooltiptext">
          <span className="tooltiptext--name">{props.data.name}</span>
          <br/>
          <span className="tooltiptext--title">{props.data.position}</span>
        </div>
        <img
          src={props.data.photo ? props.data.photo : "https://res.cloudinary.com/colark/image/upload/v1534352217/Ellipse.svg"}
          alt={props.data.name}
          className="team-member__photo"
        />
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
