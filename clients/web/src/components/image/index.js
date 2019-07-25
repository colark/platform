import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { withTheme } from "../../theme";
import { height, maxWidth } from "styled-system";

const Image = ({ children, addCss, ...rest }) => {
  const style = addCss`
    ${height}
    ${maxWidth}
  `;

  return <img css={style} {...rest} />;
};

Image.defaultProps = {};

export default withTheme(Image);
