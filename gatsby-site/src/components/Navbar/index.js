import React from 'react'
import Link from 'gatsby-link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import "./navbar.css";
// import Logo from "./colarklogo.js";

export default class ReactNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="sticky-nav">
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
        <svg width="40" height="35" viewBox="0 0 112 104" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="108.5" height="100" fill-opacity="0" transform="translate(2 2)"/>
        <path d="M56.5 80.5V23.5L110.5 33.475V71.665L56.5 80.5Z" fill="#0111FC"/>
        <path d="M2 102V2L102 19.5V86.5L2 102Z" stroke="black" stroke-width="3"/>
        </svg>
COLARK</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Partners</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Team</NavLink>
              </NavItem>
              <NavItem>
                <button>Sign in</button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
