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

const Button = ({ text, theme, addCss, ...rest }) => {
  const { colors } = theme;

  let borderColor = theme.colors.primary.secondary;
  let colorProps = {};
  if (rest.variant == "unstack") {
    borderColor = theme.colors.unstack.secondary;
    colorProps = theme.tags.unstack;
  }

  const style = addCss`
    ${props => color({ ...props, ...colorProps })}
    ${space}
    ${borders}
    ${fontSize}
    ${fontFamily}
    text-transform: uppercase;
    ${({ theme }) => `border: 1px solid ${borderColor};`}
  `;

  return (
    <button css={style} {...rest}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  paddingTop: 1,
  paddingBottom: 1,
  paddingLeft: 3,
  paddingRight: 3,
  borderRadius: 2,
  fontSize: 1,
  fontFamily: "sans",
  color: "primary.base",
  backgroundColor: "primary.light"
};

export default withTheme(Button);
