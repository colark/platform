import React from "react";
import Hero from "../components/Hero";
import UnstackSection from "../components/UnstackSection";
import AboutSection from "../components/AboutSection";
import Box from "../components/box";
export default () => {
  return (
    <Box>
      <Hero />
      <UnstackSection />
      <AboutSection />
    </Box>
  );
};
