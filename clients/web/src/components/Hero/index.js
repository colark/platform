import React from "react";
import Box from "../box";
import Heading from "../heading";
import Paragraph from "../paragraph";
import Link from "../link";
import { FlexItem, FlexItems } from "../flex-items";
import Button from "../button";

const BackgroundImage = "/assets/ABOUT.png";

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
          <Heading as="h1">we help teams ship sustainably at any scale</Heading>
          <Paragraph>
            email ellie@colark.com to learn more
          </Paragraph>
        </SectionHeader>
      </Box>
    </Box>
  );
};

Hero.defaultProps = {};

export default Hero;
