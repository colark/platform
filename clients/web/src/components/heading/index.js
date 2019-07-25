import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { withTheme } from "../../theme";
import { color, fontFamily, fontSize, fontWeight, margin } from "styled-system";

const Heading = ({ children, addCss, theme, as, ...rest }) => {
  const Component = as;

  const fontSizeProps = theme.fontSizes[as] ? { fontSize: as } : {};
  const fontWeightProps = theme.fontWeights[as] ? { fontWeight: as } : {};
  const colorProps = theme.colors[as] ? { color: as } : {};
  const marginProps = theme.space[as] ? { marginTop: as } : {};

  const style = addCss`
    ${props => color({ ...props, ...colorProps })}
    ${fontFamily}
    ${props => margin({ ...props, ...marginProps })}
    ${props => fontSize({ ...props, ...fontSizeProps })}
    ${props => fontWeight({ ...props, ...fontWeightProps })}
  `;

  return (
    <Component css={style} {...rest}>
      {children}
    </Component>
  );
};

Heading.defaultProps = {
  as: "h1",
  color: "primary.base",
  fontFamily: "sans"
};

export default withTheme(Heading);
