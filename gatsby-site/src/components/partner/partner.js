import React from 'react'
import Link from 'gatsby-link'
// import Img from 'gatsby-image'
import styles from "./partner.css"

export default function TeamMember(props) {
  return(
    <div className="partner">
      <div className="partner__logo-div">
        <img src={props.data.logo} alt={props.data.name} className="partner__photo" />
      </div>
      <div className="partner__info">
        <h3 className="partner__name">{props.data.name}</h3>
        <Link className="partner__website" to={props.data.website} target="__blank">Website</Link>
      </div>
  </div>
  );
}
