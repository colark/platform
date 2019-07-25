import React from "react";
import { FlexItem, FlexItems } from "../flex-items";
import Box from "../box";

export const Side = ({ children, ...rest }) => (
  <Box
    maxWidth={["100", "100%", "50%"]}
    display="flex"
    flexDirection="row"
    alignItems="center"
    alignContent="stretch"
    {...rest}
  >
    {children}
  </Box>
);

export default ({ Left, Right }) => {
  const LeftSide = () => <Left />;
  const RightSide = () => <Right />;
  return (
    <FlexItems margin="0 auto" alignContent="stretch">
      <LeftSide />
      <RightSide />
    </FlexItems>
  );
};
