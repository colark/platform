import React from 'react'

export default function TeamMember(props) {
  return(
    <div className="team-member">
      <div className={props.className}>
        <div className="tooltiptext">
          <span className="tooltiptext__name">{props.name}</span>
          <br/>
          <span className="tooltiptext__title">{props.position}</span>
        </div>
      </div>
      <div className="team-member__info">
        <h3 className="team-member__name">{props.name}</h3>
        <h4 className="team-member__title">{props.position}</h4>
        <a className="team-member__email" email={props.email} >Email</a>
        <a className="team-member__linkedin" href={props.linkedin} target="__blank">LinkedIn</a>
      </div>
  </div>
  );
}
