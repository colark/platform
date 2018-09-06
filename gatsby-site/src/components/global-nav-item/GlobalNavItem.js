import React from 'react'
import Link from 'gatsby-link'
import Scrollchor from 'react-scrollchor';
import {
  NavItem,
  NavLink
} from 'reactstrap';


export default function GlobalNavItem(props) {
   return (
    props.isMainPage ?
      <NavItem>
        <Scrollchor to={props.scrollto} className="nav-link">
          {props.text}
        </Scrollchor>
      </NavItem>
    : <NavItem>
        <Link to={props.linkto} className="nav-link">
          {props.text}
        </Link>
      </NavItem>
    );
}
