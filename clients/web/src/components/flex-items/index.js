import React from "react";
import Box from "../box";
import Heading from "../heading";

export const FlexItem = ({ headingText, children }) => {
  return (
    <Box maxWidth={["100%", "100%", "33%"]}>
      <Heading as="h4">{headingText}</Heading>
      {children}
    </Box>
  );
};

export const FlexItems = ({ children, ...rest }) => {
  return (
    <Box
      maxWidth="container"
      display="flex"
      flexWrap={["wrap", "wrap", "nowrap"]}
      justifyContent="space-between"
      {...rest}
    >
      {children}
    </Box>
  );
};
