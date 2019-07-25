import React from "react";
import Box from "../box";
import Heading from "../heading";
import Paragraph from "../paragraph";
import Link from "../link";
import { FlexItem, FlexItems } from "../flex-items";
import Button from "../button";

const BackgroundImage = "/assets/About.png";

const SectionHeader = ({ children, ...rest }) => {
  return (
    <Box textAlign="center" fullWidth {...rest}>
      {children}
    </Box>
  );
};

const Hero = ({ theme }) => {
  return (
    <Box
      backgroundImage={`url("${BackgroundImage}")`}
      backgroundSize={"100% auto"}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      as="header"
      minHeight="600px"
      display="flex"
      flexDirection="row"
      alignItems="center"
    >
      <Box
        display="flex"
        maxWidth="container"
        flexDirection="column"
        alignItems="center"
        alignContent="stretch"
        margin="0 auto"
      >
        <SectionHeader marginBottom={4}>
          <Heading as="h1">ship sustainably at scale</Heading>
          <Paragraph>
            Focus on your business, let your dev team focus on code. We make best practices 
            the path of least resistance.
          </Paragraph>
        </SectionHeader>
        <FlexItems minWidth={3} marginTop={3} justifyContent="space-between">
          <Button variant="primary">Contact Us</Button>
          <Button variant="outline">Learn More</Button>
        </FlexItems>
      </Box>
    </Box>
  );
};

Hero.defaultProps = {};

export default Hero;
