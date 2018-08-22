import React from 'react'
import Link from 'gatsby-link'
import Illustration2 from './illustration2/Illustration2'
import styles from "./partner.css"

export default function Partner(props) {
  return(
    <div className="partner-container">
      <Illustration2/>
      <div className="partner">
        <div className="partner__logo-div">
          <img src={props.logo} alt={props.name} className="partner__photo" />
        </div>
        <div className="partner__info">
          <Link className="partner__website" to={props.website} target="__blank">Website</Link>
        </div>
      </div>
    </div>
  );
}
