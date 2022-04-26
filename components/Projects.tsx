import { Box, Container, Wrap, WrapItem, Text, Stack } from "@chakra-ui/react";
import data from "../public/data/data";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <Box maxW={["90%"]} mx="auto" height={"100%"}>
      <Text fontSize={"2.2em"} letterSpacing="1px" fontWeight="700">
        Projects
      </Text>

      <Wrap mt="1em" direction={"column"} spacing="4">
        {data.projects.map((project) => {
          return (
            <WrapItem key={project.name}>
              <ProjectItem project={project} />
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
};

export default Projects;
