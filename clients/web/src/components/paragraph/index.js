import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { withTheme } from "../../theme";
import { color, fontFamily, fontSize } from "styled-system";

const Paragraph = ({ children, addCss, type, theme, ...rest }) => {
  const fontSizeProps = { fontSize: type == "one" ? 1 : 0 };

  const style = addCss`
    ${color}
    ${fontFamily}
    ${props => fontSize({ ...props, ...fontSizeProps })}
  `;

  return (
    <p css={style} {...rest}>
      {children}
    </p>
  );
};

Paragraph.defaultProps = {
  type: "one",
  color: "grey.dark",
  fontFamily: "body"
};

export default withTheme(Paragraph);
