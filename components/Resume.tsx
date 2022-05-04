import {
  Box,
  Container,
  Divider,
  Text,
  Icon,
  Stack,
  Link,
} from "@chakra-ui/react";
import data from "../public/data/data";

const Resume = () => {
  const { name, title, social } = data.resume;

  return (
    <Box height={"100vh"}>
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
      <Container>
        <Text as="h2" fontWeight={700} fontSize="1.5em" letterSpacing="1px">
          Technical Skills
        </Text>
        {/* 
        
      Box > Text + Badges

        */}
      </Container>
    </Box>
  );
};

export default Resume;
