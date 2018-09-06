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
          Partners
        </Scrollchor>
      </NavItem>
    : <NavItem>
        <Link to={props.linkto} className="nav-link">
          Partners
        </Link>
      </NavItem>
    );
}
