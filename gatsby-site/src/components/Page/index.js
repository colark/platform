import React from 'react';
import Link from 'gatsby-link';
import "./Page.css";

 export default function Page(props) {
    return(
        <div>
            <h1 className="page_title">{props.title}</h1>
            <a href={props.website} target="__blank">
                <img src={props.logo} className="logo" />
            </a>
            <div className="page-description">
                {props.description}
            </div>
        </div>
    );
  }