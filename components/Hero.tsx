import { Container, Box, Text, useColorMode, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import portfolioData from '../public/data/data.json'

const Hero = () => {
  const {colorMode} = useColorMode();
  const {hero}= portfolioData

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
            {hero.intro}
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
            {hero.name}
          </Text>{" "}
        </Box>

        <Box
          my="0.5em"
          letterSpacing={"2px"}
          fontWeight={500}
          fontSize={["2.5em", "3em"]}
        >
          <Text fontSize={"0.4em"} lineHeight="5">
            {hero.info}
          </Text>
        </Box>
        <Link to="about" smooth duration={800} offset={-50}>
          <Button
            as={motion.button}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition="0.5s ease-in 0.3s"
            size="md"
            mt="0.5em"
            borderWidth={"1px"}
            borderRadius="2px"
            borderColor={
              colorMode === "light" ? "blackAlpha.700" : "whiteAlpha.700"
            }
            variant="outline"
            _active={{ backgroundColor: "transparent" }}
            _focus={{ outline: "none" }} // this removes chakra ui weird focus border
          >
            <Text
              fontWeight={700}
              color={
                colorMode === "light" ? "blackAlpha.800" : "whiteAlpha.800"
              }
              letterSpacing="0.5px"
            >
              Know more
            </Text>
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Hero;
