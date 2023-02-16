import data from "../public/data/data";
import { Box, Stack, Text, useColorMode, Button } from "@chakra-ui/react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import Fade from "react-reveal";
import gradient from "../styles/gradients.module.scss";

const AboutMe = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { about } = data;

  return (
    <Box id="about" my="3em" width={["100%", "100%", "60%"]} mx="auto">
      <Stack
        direction={"column"}
        mx="1em"
        spacing={"1em"}
        letterSpacing={["1px", "1.6px"]}
        lineHeight={8}
      >
        <Fade delay={200} duration={1000}>
          <Text
            fontSize={"1.6em"}
            fontWeight={700}
            bgGradient={
              colorMode === "light"
                ? "linear(to-l, black,black)"
                : "linear(to-l, #f7ba2c 60%,#ea5459)"
            }
            bgClip="text"
          >
            {about.title}
          </Text>
        </Fade>
        <Fade delay={200} duration={1000}>
          <Text>{about.paraOne}</Text>
        </Fade>
        <Fade delay={200} duration={1000}>
          <Text>{about.paraTwo}</Text>
        </Fade>
        <Fade delay={200} duration={1000}>
          <Text>{about.paraThree}</Text>
        </Fade>
      </Stack>
      <Box mt="3em">
        <Link href={"/resume"} passHref>
          <Button
            mx="1em"
            borderRadius="2px"
            _focus={{ outline: "none" }} // this removes chakra ui weird focus border
            display="block"
            letterSpacing="1px"
            variant="outline"
            disabled
          >
            Resume
          </Button>
        </Link>
        <LinkScroll to="project-section" smooth duration={800} offset={-50}>
          <Button
            mt="1em"
            mx="1em"
            borderRadius="2px"
            _focus={{ outline: "none" }} // this removes chakra ui weird focus border
            display="block"
            letterSpacing="1px"
            size="lg"
            className={
              colorMode === "light"
                ? gradient.lightBGradient
                : gradient.darkBGradient
            }
          >
            View Projects
          </Button>
        </LinkScroll>
      </Box>
    </Box>
  );
};

export default AboutMe;
