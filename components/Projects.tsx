import { Box, Container, Wrap, WrapItem, Text, Stack } from "@chakra-ui/react";
import data from "../public/data/data";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <Box maxW={["90%", "70%"]} mx="auto" height={"100%"}>
      <Text fontSize={"2.2em"} letterSpacing="1px" fontWeight="700">
        Projects
      </Text>

      <Box width={"100%"}>
        <Wrap mt="1em" spacing="5">
          {data.projects.map((project) => {
            return (
              <WrapItem key={project.name}>
                <ProjectItem project={project} />
              </WrapItem>
            );
          })}
        </Wrap>{" "}
      </Box>
    </Box>
  );
};

export default Projects;
