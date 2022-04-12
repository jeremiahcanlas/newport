import { Container, Heading, Box, Button, Text } from "@chakra-ui/react";
import Toggle from "./Toggle";

const Hero = () => {
  return (
    <Container
      height="100vh"
      width="100%"
      textAlign="left"
      centerContent
      justifyContent="center"
    >
      <Box pos={"absolute"} top={0} right={0}>
        <Container my=".5em">
          <Toggle />
        </Container>
      </Box>
      <Box>
        <Heading lineHeight="1.5em" letterSpacing="1px">
          Hello, my name is{" "}
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            letterSpacing="1px"
          >
            Jeremiah Canlas
          </Text>{" "}
          and I am a
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            letterSpacing="1px"
          >
            front-end web developer.
          </Text>
        </Heading>
      </Box>
    </Container>
  );
};

export default Hero;
