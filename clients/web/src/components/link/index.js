import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { withTheme } from "../../theme";
import { color, fontFamily, fontSize } from "styled-system";

const Link = ({ children, addCss, type, theme, ...rest }) => {
  const style = addCss`
    text-decoration: none;
    ${color}
    ${fontFamily}
    ${fontSize}
  `;

  return (
    <a css={style} {...rest}>
      {children}
    </a>
  );
};

Link.defaultProps = {
  color: "primary.base",
  fontFamily: "body"
};

export default withTheme(Link);
