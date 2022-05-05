import {
  Badge,
  Box,
  Container,
  Divider,
  Wrap,
  WrapItem,
  Text,
  Icon,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import data from "../public/data/data";
import { FaFilePdf } from "react-icons/fa";

const Resume = () => {
  const { name, title, social, technical, employment, projects, resumePath } =
    data.resume;

  return (
    <Box height={"100%"}>
      {/*Intro*/}

      <Container>
        <Text as="h1" fontSize={"2.2em"} fontWeight={700} letterSpacing="1px">
          {name}
        </Text>
        <Text fontSize={"0.8em"} fontWeight={500} letterSpacing="0.7px">
          {title.toUpperCase()}
        </Text>
        <Stack mt="1em" spacing="3">
          {social.map((item) => {
            return (
              <Box key={item.name}>
                <Icon as={item.icon} display="inline-block" />
                <Text
                  fontSize={"0.8em"}
                  fontWeight="300"
                  display={"inline-block"}
                  ml="8px"
                  letterSpacing="0.8px"
                >
                  <Link
                    href={
                      item.name !== "email" ? item.url : `mailto:${item.url}`
                    }
                    target="_blank"
                  >
                    {item.username}
                  </Link>
                </Text>
              </Box>
            );
          })}
        </Stack>
      </Container>
      <Divider maxW="90%" mx="auto" my="1.5em" />
      {/* Technical Skills*/}
      <Container>
        <Text as="h2" fontWeight={700} fontSize="1.5em" letterSpacing="1.2px">
          Technical Skills
        </Text>

        <Stack spacing="3" mt="1em">
          {technical.map((item) => (
            <Box key={item.type}>
              <Text as="h3" fontSize={"1em"} fontWeight={600}>
                {item.type}
              </Text>
              <Wrap spacing="1">
                {item.skills.map((skill) => (
                  <WrapItem key={skill}>
                    <Badge fontSize={"0.7em"}>{skill}</Badge>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          ))}
        </Stack>
      </Container>
      <Divider maxW="90%" mx="auto" my="1.5em" />
      {/* Employment/Experience */}
      <Container>
        <Text as="h2" fontWeight={700} fontSize="1.5em" letterSpacing="1.2px">
          Employment
        </Text>
        <Stack spacing={4} mt="1em">
          {employment.map((job) => (
            <Box key={job.company}>
              <Text as="h3" fontSize={"0.8em"}>
                <b>{job.position}</b>, <i>{job.company}</i>, {job.location}
              </Text>
              <Badge fontSize={"0.7em"}>
                {job.startDate} - {job.endDate}
              </Badge>
              <Box>
                <UnorderedList>
                  {job.objectives.map((obj) => (
                    <ListItem key={obj} fontSize="0.8em">
                      {obj}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
      <Divider maxW="90%" mx="auto" my="1.5em" />
      <Container>
        <Text as="h2" fontWeight={700} fontSize="1.5em" letterSpacing="1.2px">
          Projects
        </Text>

        <Stack mt="1em">
          {projects.map((proj) => (
            <Box key={proj.name}>
              <Text fontSize={"1em"} fontWeight={700}>
                {proj.name}
              </Text>
              <Link href={proj.url}>
                <Text fontSize={"0.8em"} fontStyle="italic">
                  {proj.link}
                </Text>
              </Link>

              <UnorderedList>
                {proj.details.map((dets) => (
                  <ListItem key={dets} fontSize="0.8em">
                    {dets}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          ))}
        </Stack>
      </Container>
      <Container my="2em" fontSize={"0.8em"}>
        <Text>
          <b>Work Authorization:</b> Canadian Citizen
        </Text>
        <Text fontWeight={600} mt="1em">
          *References available upon request.
        </Text>
      </Container>
      <Container my="2em">
        <Box>
          <Text
            fontSize={"1em"}
            fontWeight={700}
            letterSpacing="1px"
            display={"inline-block"}
          >
            PDF Version
          </Text>
        </Box>

        <Link href={resumePath} target="_blank">
          <Button fontSize={"0.8em"} variant="unstyled">
            Download Here
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default Resume;
