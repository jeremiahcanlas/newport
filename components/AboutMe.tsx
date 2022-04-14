import data from "../public/data/data";
import { Box, Stack, Text, useColorMode } from "@chakra-ui/react";

const AboutMe = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box height="100vh" width={["100%", "100%", "60%"]} py="1em" mx="auto">
      <Stack
        direction={"column"}
        mx="1em"
        spacing={"1em"}
        letterSpacing="1.6px"
        lineHeight={8}
      >
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
          {data.about.title}
        </Text>
        <Text>{data.about.paraOne}</Text>
        <Text>{data.about.paraTwo}</Text>
        <Text>{data.about.paraThree}</Text>
      </Stack>
    </Box>
  );
};

export default AboutMe;
