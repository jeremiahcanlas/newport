import {
  Container,
  Heading,
  Box,
  Button,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Toggle from "./Toggle";

const Hero = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      height="100vh"
      width="100%"
      textAlign="left"
      centerContent
      justifyContent="center"
    >
      <Box pos={"absolute"} top={0} right={0}>
        <Container my=".5em" textAlign={"center"}>
          <Toggle />
        </Container>
        {colorMode === "light" && (
          <Text fontSize={"0.5em"} letterSpacing="1px" mr="1em">
            try the darkside!
          </Text>
        )}
      </Box>
      <Box h="50vh">
        <Heading
          lineHeight="1.5em"
          letterSpacing="1px"
          w={"100%"}
          fontSize={["2em", "3em"]}
        >
          Hello, my name is{" "}
          <Text
            bgGradient={
              colorMode === "light"
                ? "linear(to-l, #8711c1,#2472fc)"
                : "linear(to-l, #f7ba2c,#ea5459)"
            }
            bgClip="text"
            letterSpacing="1px"
            fontSize={["1.4em", "1.5em"]}
          >
            Jeremiah
          </Text>{" "}
          <Box mt="0.5em">
            <Text fontSize={"0.4em"} lineHeight="5">
              I am a front-end web developer
              {colorMode === "dark" && (
                <Text
                  bgGradient={"linear(to-l, #3bcfd4,#fc9305,#f20094)"}
                  bgClip="text"
                >
                  with pixel perfect dreams.
                </Text>
              )}
            </Text>
          </Box>
        </Heading>
      </Box>
    </Container>
  );
};

export default Hero;
