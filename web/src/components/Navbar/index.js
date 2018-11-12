import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Scrollchor from "react-scrollchor";

const NAVBAR = gql`
  {
    navbarList {
      name
      scroll
    }
  }
`;

const NavbarItemsList = () => {
  return (
    <Query query={NAVBAR}>
      {({ loading, error, data }) => {
        if (loading) return `Loading...`;
        if (error) return `Error ${error.message}`;

        return data.navbarList.map((data, index) => {
          return (
            <div className="nav__container">
              <div className="nav__container--inner">
                <a href={data.scroll} className="nav__list">
                  {data.name}
                </a>
              </div>
            </div>
          );
        });
      }}
    </Query>
  );
};

const NavbarItemsListMobile = () => {
  return (
    <Query query={NAVBAR}>
      {({ loading, error, data }) => {
        if (loading) return `Loading...`;
        if (error) return `Error ${error.message}`;

        return data.navbarList.map((data, index) => {
          return (
            <div className="nav__container--mobile">
              <a href={data.scroll}>{data.name}</a>
            </div>
          );
        });
      }}
    </Query>
  );
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: false
    };
  }

  operation() {
    this.setState({
      showMe: !this.state.showMe
    });
  }

  render() {
    return (
      <div
        className="nav"
        style={
          this.props.backgroundColor != undefined
            ? { backgroundColor: this.props.backgroundColor, top: "20px" }
            : { backgroundColor: "#333333" }
        }
      >
        <div className="nav__container--inner">
          <a className="nav__logo" href="/">
            <img
              src="https://res.cloudinary.com/colark/image/upload/v1539894804/Colark%20Marketing%20Site/flatlogoComponent.svg"
              alt="Colark Logo"
            />
          </a>
          <NavbarItemsList />
          <button className="nav__menu" onClick={()=>this.operation()}>
            <img
              className="nav__glyphicon"
              src="https://res.cloudinary.com/colark/image/upload/v1542056919/Colark%20Marketing%20Site/icon-for-menu-6.png"
            />
          </button>
        </div>

        <div className="nav__mobile"
                style={
                  this.props.backgroundColor != undefined
                    ? { backgroundColor: this.props.backgroundColor }
                    : { backgroundColor: "#333333" }
                }>
          {
            this.state.showMe ? 
            <div>
              <NavbarItemsListMobile />
            </div>
           : null
           }
        </div>
      </div>
    );
  }
}

export default Navbar;
