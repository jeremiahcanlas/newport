import { Box, Container, Text, Stack } from "@chakra-ui/react";
import data from "../public/data/data";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <Box maxW="90%" mx="auto">
      <Text fontSize={"2.2em"} letterSpacing="1px" fontWeight="700">
        Projects
      </Text>

      <Stack direction={"column"} spacing="1">
        {data.projects.map((project) => {
          return <ProjectItem key={project.name} project={project} />;
        })}
      </Stack>
    </Box>
  );
};

export default Projects;
