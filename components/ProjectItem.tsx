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

// WORK on this one !!
const ProjectItem = ({ project }: any) => {
  return (
    <Stack direction={"column"}>
      <Container borderRadius="2px" padding="0">
        <Box>
          <Text fontWeight={"700"} letterSpacing="1px" fontSize="1.2em">
            {project.name}
          </Text>
          <Text lineHeight={"7"}>{project.info1}</Text>
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
      <Box display="block">
        <Image
          src={project.image}
          alt="Picture of the author"
          width="400px"
          height="300px"
          layout="responsive"
          quality={40}
        />
      </Box>
    </Stack>
  );
};

export default ProjectItem;
