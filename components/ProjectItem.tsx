import {
  Badge,
  Box,
  Button,
  Container,
  Wrap,
  WrapItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Tilt from "react-tilt";

// WORK on this one !!
const ProjectItem = ({ project }: any) => {
  return (
    <Stack direction={["column", "column", "row"]} spacing="6">
      <Container minW={["50%"]} borderRadius="2px" padding="0">
        <Box>
          <Text fontWeight={"700"} letterSpacing="1px" fontSize="1.2em">
            {project.name}
          </Text>
          <Text lineHeight={"7"} letterSpacing="0.2px" mt="1em">
            {project.info1}
          </Text>
        </Box>

        <Box mt="1em">
          <Wrap mt="0.5em" maxW={"90%"} direction={"row"} spacing="2">
            {project.stack.map((item: string) => {
              return (
                <WrapItem key={item}>
                  <Badge>{item}</Badge>
                </WrapItem>
              );
            })}
          </Wrap>{" "}
        </Box>
        <Stack mt="1em" direction={"row"}>
          <Button borderRadius="2px" variant="outline">
            See Live
          </Button>
          <Button borderRadius="2px" variant="ghost">
            Source Code
          </Button>
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
          <Box
            display="block"
            border="1px solid white"
            borderRadius="2px"
            overflow={"hidden"}
            w="100%"
          >
            <Image
              src={project.image}
              alt={`${project.name} image`}
              width="500px"
              height="300px"
              layout="responsive"
            />
          </Box>
        </Tilt>
      </Container>
    </Stack>
  );
};

// react tilt
// row

export default ProjectItem;
