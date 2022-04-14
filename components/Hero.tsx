import { Container, Box, Text, useColorMode } from "@chakra-ui/react";
import data from "../public/data/data";
import { motion } from "framer-motion";

const Hero = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      height="100vh"
      width="100%"
      textAlign="left"
      centerContent
      justifyContent="center"
      cursor={"default"}
    >
      <Box
        w={["100%", "90%", "100%"]}
        h="50vh"
        as={motion.div} //will triger framer motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition="0.5s ease-in"
      >
        <Box letterSpacing="1px">
          <Text fontWeight={500} fontSize={["1.5em", "2.1em"]}>
            {data.hero.intro}
          </Text>
          <Text
            lineHeight={1}
            fontWeight={700}
            bgGradient={
              colorMode === "light"
                ? "linear(to-l, #8711c1,#2472fc)"
                : "linear(to-l, #f7ba2c 60%,#ea5459)"
            }
            bgClip="text"
            letterSpacing="1px"
            fontSize={["2.7em", "3em"]}
          >
            {data.hero.name}
          </Text>{" "}
        </Box>

        <Box
          mt="0.5em"
          letterSpacing={"2px"}
          fontWeight={500}
          fontSize={["2.5em", "3em"]}
        >
          <Text fontSize={"0.4em"} lineHeight="5">
            {data.hero.info}
          </Text>
          {colorMode === "dark" && (
            <Text
              lineHeight="8"
              fontSize={"0.4em"}
              bgGradient={"linear(to-l, #3bcfd4 50%,#fc9305,#f20094)"}
              bgClip="text"
            >
              {data.hero.infoDark}
            </Text>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
