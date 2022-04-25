import { Container, Text } from "@chakra-ui/react";
import data from "../public/data/data";

const Projects = () => {
  return (
    <Container>
      <Text fontSize={"2.2em"} letterSpacing="1px" fontWeight="700">
        Projects
      </Text>
      {data.projects.map((project) => {
        return (
          <Container key={project.name}>
            <Text>{project.name}</Text>
          </Container>
        );
      })}
    </Container>
  );
};

export default Projects;
