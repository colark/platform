import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { withTheme } from "../../theme";
import {
  color,
  borders,
  space,
  fontSize,
  fontFamily,
  buttonStyle
} from "styled-system";

const Button = ({ children, theme, addCss, ...rest }) => {
  const { colors } = theme;

  const style = addCss`
    ${color}
    ${space}
    ${borders}
    ${fontSize}
    ${fontFamily}
    ${buttonStyle}
    ${({ theme }) => `border: 1px solid ${theme.colors.primary.base};`}
  `;

  return (
    <button css={style} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  paddingTop: 2,
  paddingBottom: 2,
  paddingLeft: 4,
  paddingRight: 4,
  borderRadius: 1,
  fontSize: 2,
  fontFamily: "sans"
};

export default withTheme(Button);
