import React from 'react'
// './Partner.css'

export default function Partner(props) {
  return(
      <a className="partner__website" href={props.website} target="__blank">
            <img src={props.logo} alt={props.name} className="partner__logo" />
      </a>
  );
}
