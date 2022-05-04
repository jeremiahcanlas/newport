import data from "../public/data/data";
import { Box, Stack, Text, useColorMode, Button } from "@chakra-ui/react";
import Link from "next/link";
import Fade from "react-reveal";

const AboutMe = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
            {data.about.title}
          </Text>
        </Fade>
        <Fade delay={200} duration={1000}>
          <Text>{data.about.paraOne}</Text>
        </Fade>
        <Fade delay={200} duration={1000}>
          <Text>{data.about.paraTwo}</Text>
        </Fade>
        <Fade delay={200} duration={1000}>
          <Text>{data.about.paraThree}</Text>
        </Fade>
      </Stack>
      <Link href={"/resume"} passHref>
        <Button
          mt="3em"
          mx="1em"
          borderRadius="2px"
          _focus={{ outline: "none" }} // this removes chakra ui weird focus border
        >
          Résumé
        </Button>
      </Link>
    </Box>
  );
};

export default AboutMe;
