import React from 'react'
import Link from 'gatsby-link'
import styles from "./Partner.css"

export default function Partner(props) {
  return(
      <a className="partner__website" href={props.website} target="__blank">
            <img src={props.logo} alt={props.name} className="partner__logo" />
      </a>
  );
}
