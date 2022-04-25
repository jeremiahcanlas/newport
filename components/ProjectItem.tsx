import { Container, Text } from "@chakra-ui/react";

// WORK on this one !!
const ProjectItem = ({ project }: any) => {
  return (
    <Container border={"1px solid black"} borderRadius="2px" padding="1em">
      <Text fontWeight={"600"}>{project.name}</Text>
      <Text>{project.info1}</Text>
      {project.stack.map((item: string) => {
        return <Text key={item}>{item}</Text>;
      })}
    </Container>
  );
};

export default ProjectItem;
