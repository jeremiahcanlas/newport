import { Box, Container, Stack, Text } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Box height={"30vh"} maxW={["100%", "70%", "50%"]} mt="2em" mx="auto">
      <Stack direction={["column", "row"]}>
        <Container maxW={["100%", "50%"]}>
          <Text
            as="h1"
            fontSize={"2.5em"}
            letterSpacing="1.3px"
            fontWeight="700"
          >
            {"Let's chat!"}
          </Text>

          <Text mt="0.5em" fontWeight={300} fontSize="0.9em">
            Over a cup of coffee or virtually. Your choice.
          </Text>
        </Container>

        <Container centerContent justifyContent={"center"}>
          <ContactForm />
        </Container>
      </Stack>
    </Box>
  );
};

export default Contact;
