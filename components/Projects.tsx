import { Box, Text } from "@chakra-ui/react";
import data from "../public/data/data";
import ProjectItem from "./ProjectItem";
import Fade from "react-reveal";

const Projects = () => {
  return (
    <Box
      className="project-section"
      maxW={["90%", "70%"]}
      my="20em"
      mx="auto"
      height={"100%"}
    >
      <Text fontSize={"2.2em"} letterSpacing="1px" fontWeight="700">
        Projects
      </Text>

      <Box width={"100%"}>
        {data.projects.map((project) => {
          return (
            <Fade key={project.name} delay={500}>
              <ProjectItem key={project.name} project={project} />
            </Fade>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;
