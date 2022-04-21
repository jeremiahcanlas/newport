import { Container, Box, Text, useColorMode, Button } from "@chakra-ui/react";
import data from "../public/data/data";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      className="hero-section"
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
            letterSpacing="1.5px"
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

          <Text
            visibility={colorMode === "dark" ? "visible" : "hidden"}
            lineHeight="8"
            fontSize={"0.4em"}
            bgGradient={"linear(to-l, #3bcfd4 50%,#fc9305,#f20094)"}
            bgClip="text"
          >
            {data.hero.infoDark}
          </Text>
        </Box>
        <Link to="about" smooth duration={800} offset={-50}>
          <Button
            size="sm"
            mt="0.5em"
            borderWidth={"1px"}
            borderColor={
              colorMode === "light" ? "blackAlpha.800" : "whiteAlpha.800"
            }
            variant="outline"
            _focus={{ outline: "none" }} // this removes chakra ui weird focus border
          >
            <Text
              // fontWeight={700}
              letterSpacing="1px"
              bgGradient={
                colorMode === "light"
                  ? "linear(to-l, #1a202c,#1a202c)"
                  : "linear(to-l, #3bcfd4 50%,#fc9305,#f20094)"
              }
              bgClip="text"
            >
              Know More
            </Text>
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Hero;
