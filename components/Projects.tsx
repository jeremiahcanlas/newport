import { Box, Text } from '@chakra-ui/react';
import portfolioData from '../public/data/data.json';
import ProjectItem from './ProjectItem';
import Fade from 'react-reveal';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <Box
      className="project-section"
      maxW={['90%', '70%']}
      my="20em"
      mx="auto"
      height={'100%'}
    >
      <Text
        style={{ letterSpacing: '1px', fontWeight: 700, fontSize: '2.2em' }}
      >
        Projects
      </Text>

      <Box width={'100%'}>
        {projects.map((project) => {
          return (
            <Fade key={project.name} delay={500}>
              <ProjectItem project={project} />
            </Fade>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;
