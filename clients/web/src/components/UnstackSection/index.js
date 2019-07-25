import React from "react";
import TwoColumnSection, { Side } from "../two-column-section";
import Box from "../box";
import Image from "../image";
import Heading from "../heading";
import Paragraph from "../paragraph";
import Link from "../link";
import Tag from "../tag";

const Illustration = "/assets/Illustration.png";

export default () => {
  const Left = () => (
    <Side>
      <Box maxWidth={["100%", "100%", "70%"]}>
        <Tag text="Unstack" variant="unstack" />
        <Box marginBotton={1}>
          <Heading as="h2">
            Best practices, built in
          </Heading>
          <Paragraph type="two">
            Build, test, deploy and observe securely knowing 
            you have the gold standard setup with Unstack. 
            We configure your cloud infrastructure to maximise value
            ensuring your business can focus on its mission./
            ensuring you can focus your time where it should be spent:
            the business mission.
          </Paragraph>
        </Box>
        <Link href="https://google.com">Learn more →</Link>
      </Box>
    </Side>
  );

  const IllustrationContainer = () => (
    <Side display={["none", "none", "flex"]} padding={4}>
      <Box margin="0 auto">
        <Image maxWidth="100%" height="auto" src={Illustration} />
      </Box>
    </Side>
  );
  return (
    <TwoColumnSection
      margin
      alignContent="stretch"
      Left={Left}
      Right={IllustrationContainer}
    />
  );
};
