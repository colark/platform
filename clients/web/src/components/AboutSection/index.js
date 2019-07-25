import React from "react";
import Box from "../box";
import Heading from "../heading";
import Paragraph from "../paragraph";
import Link from "../link";
import { FlexItem, FlexItems } from "../flex-items";
const BackgroundImage = "/assets/About.png";

const SectionHeader = ({ children }) => {
  return (
    <Box margin="0 auto" maxWidth="container" textAlign="center" fullWidth>
      {children}
    </Box>
  );
};

const AboutSection = ({ theme }) => {
  return (
    <Box
      backgroundImage={`url("${BackgroundImage}")`}
      backgroundSize={"100% auto"}
      paddingBottom={6}
      as="section"
    >
      <SectionHeader>
        <Heading as="h2">Colark has Opinions</Heading>
        <Paragraph>
          We believe that your platform should be able to scale with flexibility. 
          The tech stack you need evoles rapidly and we think you shouldn't have to pay a high price 
          to change with it. We guide you in building a sustainable 
          platform with the technical foundation to grow to millions of users, by baking in agile infrastrucutre .
        </Paragraph>
      </SectionHeader>
      <FlexItems margin="0 auto">
        <FlexItem headingText="Testimonial?">
          <Paragraph type="two">
            "Our development team spends 0% of their time on DevOps thanks to 
            Colark" - Artur Meister CTO Career Karma
          </Paragraph>
          <Link href="https://google.com">Learn more →</Link>
        </FlexItem>
        <FlexItem headingText="Testimonial2?">
          <Paragraph type="two">
            "We used Unstack to grow from 0 MAU to 50,000 MAU, seemlessly" - Unknown
          </Paragraph>
          <Link href="https://google.com">Learn more →</Link>
        </FlexItem>
        <FlexItem headingText="Testimonial3?">
          <Paragraph type="two">
            "Get Rekt or Die Tryn" - Brianna
          </Paragraph>
          <Link href="https://google.com">Learn more →</Link>
        </FlexItem>
      </FlexItems>
    </Box>
  );
};

AboutSection.defaultProps = {};

export default AboutSection;
