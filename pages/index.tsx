import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Meta from "../components/Meta";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Box>
        <Hero />
        {/* <AboutMe/> */}
        {/* <Projects/> */}
      </Box>
    </>
  );
};

export default Home;
