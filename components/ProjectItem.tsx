import {
  Badge,
  Box,
  Button,
  Container,
  Wrap,
  WrapItem,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import Tilt from "react-tilt";
import gradient from "../styles/gradients.module.scss";
import styles from "../styles/projects.module.scss";
import Fade from "react-reveal";

// WORK on this one !!
const ProjectItem = ({ project }: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack my={"2em"} direction={["column", "column", "row"]} spacing="6">
      <Container minW={["50%"]} borderRadius="2px" padding="0">
        <Box>
          <Text fontWeight={"700"} letterSpacing="1px" fontSize="1.5em">
            {project.name}
          </Text>
          <Text lineHeight={"7"} letterSpacing="0.2px" mt="1em">
            {project.info1}
          </Text>
        </Box>

        <Box mt="1em">
          <Wrap mt="0.5em" maxW={"90%"} direction={"row"} spacing="1.5">
            {project.stack.map((item: string) => {
              return (
                <WrapItem key={item}>
                  <Badge
                    variant={colorMode === "light" ? "outline" : "subtle"}
                    fontSize="0.7em"
                  >
                    {item}
                  </Badge>
                </WrapItem>
              );
            })}
          </Wrap>{" "}
        </Box>
        <Stack mt="1em" direction={"row"}>
          <a href={project.url} target="_blank" rel="noreferrer">
            <Button
              className={
                colorMode === "light"
                  ? gradient.lightBGradient
                  : gradient.darkBGradient
              }
            >
              See Live
            </Button>
          </a>
          <a href={project.repo} target="_blank" rel="noreferrer">
            <Button
              borderRadius="2px"
              variant="ghost"
              className={styles.buttonstyle}
            >
              Source Code
            </Button>
          </a>
        </Stack>
      </Container>
      <Container margin="0" p={0}>
        <Tilt
          options={{
            reverse: false,
            max: 5,
            perspective: 1000,
            scale: 1,
            speed: 500,
            transition: true,
            axis: null,
            reset: true,
            easing: "cubic-bezier(.03,.98,.52,.99)",
          }}
        >
          <a href={project.url} target="_blank" rel="noreferrer">
            <Box display="block" border="2px solid white" overflow={"hidden"}>
              <Image
                // src={project.image}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                src={
                  project.image2 && colorMode === "light"
                    ? project.image2
                    : project.image
                }
                alt={`${project.name} image`}
                layout="responsive"
              />
            </Box>
          </a>
        </Tilt>
      </Container>
    </Stack>
  );
};

export default ProjectItem;
