import React from "react";
import logo from "./logo.png"; // Tell Webpack this JS file uses this image

function Logo(){
  return <img src={logo} alt="Logo" />;
}

export default Logo;