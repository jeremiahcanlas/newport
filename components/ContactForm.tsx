import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import FormField from "./FormField";
import * as Yup from "yup";

const ContactForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  //using Yup for form validation.
  const validateForm = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Enter a valid email address"
      )
      .required("Email is required"),
    body: Yup.string().required("Message is required"),
  });

  return (
    <>
      <Button
        variant={"outline"}
        size="lg"
        borderRadius="2px"
        onClick={onOpen}
        mt="2em"
      >
        Reach me
      </Button>

      <Modal
        onClose={onClose}
        motionPreset="slideInBottom"
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          maxW={["90%", "70%", "60%"]}
          borderRadius="3px"
          bg={colorMode === "light" ? "#ffffff" : "#11141c"}
          opacity="1"
        >
          <Box>
            <ModalHeader
              pb="0"
              fontSize={"2em"}
              fontWeight={700}
              letterSpacing="1.4px"
            >
              Talk soon
            </ModalHeader>
            <Text mx="24px" fontSize={"0.9em"} fontWeight={200}>
              {"Do it. I promise I won't ghost you.👻"}
            </Text>
          </Box>

          <ModalCloseButton />

          <ModalBody>
            <Formik
              initialValues={{
                name: "",
                email: "",
                body: "",
              }}
              onSubmit={(values: any, actions: any) => {
                console.log(values);
              }}
              validationSchema={validateForm}
            >
              {(props: { isSubmitting: boolean | undefined }) => {
                return (
                  <Form>
                    <FormField
                      type="text"
                      placeholder="Name"
                      name="name"
                      textbox={false}
                    />

                    <FormField
                      type="email"
                      placeholder="Email"
                      name="email"
                      textbox={false}
                    />
                    <FormField
                      type=""
                      placeholder="Message here."
                      name="body"
                      textbox
                    />
                    <Button
                      mt={4}
                      colorScheme="teal"
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactForm;
