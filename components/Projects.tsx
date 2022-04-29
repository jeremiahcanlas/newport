import { Box, Container, Wrap, WrapItem, Text, Stack } from "@chakra-ui/react";
import data from "../public/data/data";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <Box maxW={["90%", "70%"]} my="20em" mx="auto" height={"100%"}>
      <Text fontSize={"2.2em"} letterSpacing="1px" fontWeight="700">
        Projects
      </Text>

      <Box width={"100%"}>
        {data.projects.map((project) => {
          return <ProjectItem key={project.name} project={project} />;
        })}
      </Box>
    </Box>
  );
};

export default Projects;
