import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Meta from "../components/Meta";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Toggle from "../components/Toggle";

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Box>
        <Toggle />
        <Hero />
        <AboutMe />
        {/* <Projects/> */}
        {/* <Contact/> */}
      </Box>
    </>
  );
};

export default Home;
