import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { withTheme } from "../../theme";
import {
  color,
  maxWidth,
  textAlign,
  space,
  flex,
  flexWrap,
  alignItems,
  alignContent,
  flexDirection,
  display,
  justifyContent,
  background,
  backgroundImage,
  backgroundSize,
  minHeight,
  minWidth,
  backgroundRepeat,
  backgroundPosition
} from "styled-system";

const Box = ({ children, addCss, theme, fullWidth, as, ...rest }) => {
  const Component = as;

  const colorProps = theme.colors[as] ? { color: as } : {};
  const maxWidthProps = fullWidth ? { maxWidth: "fullWidth" } : {};
  const paddingProps =
    rest.maxWidth == "container"
      ? { paddingLeft: [4, 6, 6], paddingRight: [4, 6, 6] }
      : {};

  const style = addCss`
    ${background}
    ${backgroundImage}
    ${backgroundSize}
    ${backgroundRepeat}
    ${backgroundPosition}
    ${justifyContent}
    ${display}
    ${flexWrap}
    ${flexDirection}
    ${alignItems}
    ${alignContent}
    ${flex}
    ${textAlign}
    ${minHeight}
    ${minWidth}
    ${props => maxWidth({ ...props, ...maxWidthProps })}
    ${props => color({ ...props, ...colorProps })}
    ${props => space({ ...props, ...paddingProps })}
  `;

  return (
    <Component css={style} {...rest}>
      {children}
    </Component>
  );
};

Box.defaultProps = {
  as: "div",
  fullWidth: false
};

export default withTheme(Box);
