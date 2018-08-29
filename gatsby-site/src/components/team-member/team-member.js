import React from 'react'
import Mailto from 'react-mailto';
import styles from "./team-member.css"

export default function TeamMember(props) {
  return(
    <div className="team-member">
      <div className={props.className}>
        <div className="tooltiptext">
          <span className="tooltiptext--name">{props.name}</span>
          <br/>
          <span className="tooltiptext--title">{props.position}</span>
        </div>
        <img
          src={props.photo ? props.photo : "https://res.cloudinary.com/colark/image/upload/v1534352217/Ellipse.svg"}
          alt={props.name}
          className="team-member__photo"
        />
      </div>
      <div className="team-member__info">
        <h3 className="team-member__name">{props.name}</h3>
        <h4 className="team-member__title">{props.position}</h4>
        <Mailto className="team-member__email" email={props.email} >Email</Mailto>
        <a className="team-member__linkedin" href={props.linkedin} target="__blank">LinkedIn</a>
      </div>
  </div>
  );
}
