import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Scrollchor from 'react-scrollchor';

const NAVBAR = gql`
{
  navbarList {
    name
    scroll
  }
}`;

const NavbarItemsList = () => {
  return <Query query={NAVBAR}>
    {({ loading, error, data }) => {
      if (loading) return `Loading...`;
      if (error) return `Error ${error.message}`;

      console.log(data);
      return data.navbarList.map((data, index) => {
        return (
          <div className="nav__container">
            <div className="nav__container--inner">
              <a href={data.scroll} className="nav__list">{data.name}
              </a>
            </div>
          </div>
        )
      })
    }}
  </Query>
}

const NavbarItemsListMobile = () => {
  return <Query query={NAVBAR}>
    {({ loading, error, data }) => {
      if (loading) return `Loading...`;
      if (error) return `Error ${error.message}`;
      console.log(data);
      return data.navbarList.map((data, index) => {
        return (
          <div className="nav__container--mobile">
            <a href={data.scroll} >{data.name}</a>
          </div>
        )
      })
    }}
  </Query>
}


class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      showMe: true
    };
  }

  operation() {
    this.setState({
      showMe: !this.state.showMe
    })
  }

  render() {
    return (
      <div className="nav">
        <div className="nav__container--inner">
          <a className="nav__logo" href="/">
            <svg width="155" height="66" viewBox="0 0 155 66" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 27.7883V18.6L41.76 33V42.1199L24 27.7883Z" fill="url(#paint0_linear)" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M48 28.4044L24 9L2.90236e-05 28.4044L24 47.8088L29.7096 43.1925L12.4802 29.2623L24.4802 19.5601L41.7096 33.4903L48 28.4044Z" fill="url(#paint1_linear)" />
              <path d="M23.9996 56.5199L23.9492 47.7874L29.934 43.0645L29.7596 51.7199L23.9996 56.5199Z" fill="url(#paint2_linear)" />
              <path d="M41.7598 42.1199V33.48L47.9998 28.3906V36.84L41.7598 42.1199Z" fill="url(#paint3_linear)" />
              <path d="M0 37.6452V28.3549L23.9476 47.7097V57L0 37.6452Z" fill="url(#paint4_linear)" />
              <path d="M67.068 38.264C68.244 38.264 69.216 38.168 69.984 37.976C70.776 37.76 71.52 37.484 72.216 37.148L73.044 40.136C72.276 40.496 71.388 40.784 70.38 41C69.372 41.24 68.136 41.36 66.672 41.36C65.112 41.36 63.648 41.108 62.28 40.604C60.936 40.076 59.76 39.32 58.752 38.336C57.768 37.328 56.988 36.104 56.412 34.664C55.836 33.2 55.548 31.532 55.548 29.66C55.548 27.836 55.824 26.204 56.376 24.764C56.928 23.3 57.696 22.064 58.68 21.056C59.688 20.048 60.876 19.28 62.244 18.752C63.636 18.224 65.16 17.96 66.816 17.96C68.328 17.96 69.564 18.092 70.524 18.356C71.508 18.596 72.372 18.92 73.116 19.328L72.216 22.244C71.4 21.884 70.62 21.596 69.876 21.38C69.156 21.164 68.292 21.056 67.284 21.056C66.252 21.056 65.268 21.212 64.332 21.524C63.42 21.836 62.616 22.34 61.92 23.036C61.248 23.732 60.708 24.632 60.3 25.736C59.892 26.816 59.688 28.124 59.688 29.66C59.688 31.196 59.88 32.516 60.264 33.62C60.672 34.7 61.2 35.588 61.848 36.284C62.52 36.956 63.3 37.46 64.188 37.796C65.1 38.108 66.06 38.264 67.068 38.264ZM91.834 32.324C91.834 33.74 91.606 35.012 91.15 36.14C90.718 37.268 90.118 38.216 89.35 38.984C88.582 39.752 87.682 40.34 86.65 40.748C85.618 41.156 84.502 41.36 83.302 41.36C82.102 41.36 80.986 41.168 79.954 40.784C78.946 40.4 78.058 39.848 77.29 39.128C76.546 38.384 75.958 37.472 75.526 36.392C75.118 35.312 74.914 34.076 74.914 32.684C74.914 31.244 75.13 29.972 75.562 28.868C76.018 27.764 76.63 26.828 77.398 26.06C78.166 25.292 79.066 24.716 80.098 24.332C81.13 23.924 82.246 23.72 83.446 23.72C84.646 23.72 85.75 23.912 86.758 24.296C87.79 24.656 88.678 25.196 89.422 25.916C90.19 26.636 90.778 27.536 91.186 28.616C91.618 29.696 91.834 30.932 91.834 32.324ZM87.982 32.504C87.982 31.424 87.85 30.512 87.586 29.768C87.322 29 86.974 28.376 86.542 27.896C86.11 27.416 85.618 27.068 85.066 26.852C84.514 26.636 83.938 26.528 83.338 26.528C82.762 26.528 82.198 26.624 81.646 26.816C81.094 27.008 80.602 27.332 80.17 27.788C79.738 28.244 79.39 28.856 79.126 29.624C78.886 30.392 78.766 31.352 78.766 32.504C78.766 33.56 78.898 34.472 79.162 35.24C79.426 36.008 79.774 36.644 80.206 37.148C80.638 37.628 81.13 37.988 81.682 38.228C82.258 38.444 82.834 38.552 83.41 38.552C83.986 38.552 84.55 38.456 85.102 38.264C85.654 38.072 86.146 37.748 86.578 37.292C87.01 36.812 87.346 36.188 87.586 35.42C87.85 34.628 87.982 33.656 87.982 32.504ZM95.6832 41V15.404H99.3192V41H95.6832ZM104.404 25.52C105.508 24.92 106.564 24.476 107.572 24.188C108.604 23.876 109.744 23.72 110.992 23.72C111.952 23.72 112.828 23.828 113.62 24.044C114.436 24.26 115.132 24.608 115.708 25.088C116.284 25.568 116.728 26.216 117.04 27.032C117.376 27.824 117.544 28.796 117.544 29.948V41H114.556L114.16 39.164H114.052C113.38 39.932 112.6 40.496 111.712 40.856C110.824 41.192 109.84 41.36 108.76 41.36C107.056 41.36 105.676 40.904 104.62 39.992C103.588 39.08 103.072 37.868 103.072 36.356C103.072 35.42 103.264 34.616 103.648 33.944C104.032 33.248 104.572 32.672 105.268 32.216C105.964 31.76 106.792 31.424 107.752 31.208C108.712 30.968 109.768 30.848 110.92 30.848H113.8V29.552C113.8 28.472 113.512 27.728 112.936 27.32C112.36 26.888 111.568 26.672 110.56 26.672C109.936 26.672 109.228 26.78 108.436 26.996C107.668 27.188 106.78 27.56 105.772 28.112L104.404 25.52ZM113.836 33.296L111.568 33.332C109.864 33.38 108.664 33.68 107.968 34.232C107.272 34.784 106.924 35.432 106.924 36.176C106.924 36.656 106.996 37.052 107.14 37.364C107.308 37.676 107.524 37.928 107.788 38.12C108.052 38.312 108.352 38.456 108.688 38.552C109.048 38.624 109.408 38.66 109.768 38.66C110.512 38.66 111.244 38.48 111.964 38.12C112.708 37.736 113.332 37.196 113.836 36.5V33.296ZM121.976 41V24.008H124.784L125.324 27.284C125.732 26.276 126.392 25.436 127.304 24.764C128.216 24.068 129.32 23.72 130.616 23.72C131.192 23.72 131.684 23.768 132.092 23.864C132.524 23.96 132.908 24.092 133.244 24.26L132.56 27.356C132.272 27.212 131.936 27.092 131.552 26.996C131.192 26.9 130.772 26.852 130.292 26.852C128.972 26.852 127.868 27.308 126.98 28.22C126.092 29.108 125.648 30.464 125.648 32.288V41H121.976ZM139.361 34.952V41H135.689V15.404H139.361V31.1L145.805 24.008H150.341L143.501 31.172L150.665 41H146.309L140.945 33.368L139.361 34.952Z" fill="white" />
              <defs>
                <linearGradient id="paint0_linear" x1="25.6313" y1="23.249" x2="44.1932" y2="36.4364" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E0E0E0" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="23.9127" y1="12.0471" x2="34.1044" y2="26.228" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E5E5E5" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient id="paint2_linear" x1="24.9174" y1="54.9103" x2="33.6012" y2="47.117" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#E0E0E0" />
                </linearGradient>
                <linearGradient id="paint3_linear" x1="48.1064" y1="27.073" x2="37.652" y2="38.0349" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E0E0E0" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient id="paint4_linear" x1="23.8626" y1="51.1968" x2="-1.95417" y2="41.6906" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E5E5E5" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
          </a>
            <NavbarItemsList />
          <button className="nav__menu" onClick={this.props.operation}>
            <img className="nav__glyphicon" src="https://res.cloudinary.com/colark/image/upload/v1537301204/Colark%20Marketing%20Site/menu-rounded-solid.png" />
          </button>
        </div>

        <div className="nav__mobile">
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
