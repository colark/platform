import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { ThemeProvider } from "../theme";

import Button from "../components/button";
import Heading from "../components/heading";
import Paragraph from "../components/paragraph";
import Link from "../components/link";
import Tag from "../components/tag";

import AboutSection from "../components/AboutSection";
import UnstackSection from "../components/UnstackSection";
import Hero from "../components/Hero";

import { Welcome } from "@storybook/react/demo";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .addDecorator(Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ))
  .add("primary", () => (
    <Button variant="primary" onClick={action("clicked")}>
      Hello Button
    </Button>
  ))
  .add("outline", () => (
    <Button variant="outline" onClick={action("clicked")}>
      Hello Button
    </Button>
  ))
  .add("with normal props", () => (
    <Button bg="primary.dark" color="white" onClick={action("clicked")}>
      Hello Button
    </Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍
      </span>
    </Button>
  ));

storiesOf("Heading", module)
  .addDecorator(Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ))
  .add("h1", () => <Heading as="h1">Hello Button</Heading>)
  .add("h2", () => <Heading as="h2">Hello Button</Heading>)
  .add("h3", () => (
    <Heading color="primary.dark" as="h3">
      Hello Button
    </Heading>
  ))
  .add("h4", () => <Heading as="h4">Hello Button</Heading>)
  .add("h5", () => (
    <Heading color="black" as="h5">
      Hello Button
    </Heading>
  ))
  .add("h6", () => (
    <Heading color="black" as="h6">
      Hello Button
    </Heading>
  ));

storiesOf("Link", module)
  .addDecorator(Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ))
  .add("with usage", () => <Link href="https://google.com">Click Here!</Link>);

storiesOf("Tag", module)
  .addDecorator(Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ))
  .add("with usage", () => <Tag text="Product" />);

storiesOf("Paragraph", module)
  .addDecorator(Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ))
  .add("Paragraph 1", () => (
    <Paragraph>
      Called action lorem ipsum dolor sit amet, ctetur adipiscing elit.
      Pellentesque semper feugiat turpis, laoreet aliquam nisi ltis vitae. Nemo
      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
      voluptatem sequi nesciunt.
    </Paragraph>
  ))
  .add("Paragraph 2", () => (
    <Paragraph type="two">
      Called action lorem ipsum dolor sit amet, ctetur adipiscing elit.
      Pellentesque semper feugiat turpis, laoreet aliquam nisi ltis vitae. Nemo
      enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
      voluptatem sequi nesciunt.
    </Paragraph>
  ));

storiesOf("Hero", module)
  .addDecorator(Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ))
  .add("with usage", () => <Hero />);

storiesOf("AboutSection", module)
  .addDecorator(Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ))
  .add("with usage", () => <AboutSection />);
storiesOf("UnstackSection", module)
  .addDecorator(Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ))
  .add("with usage", () => <UnstackSection />);
