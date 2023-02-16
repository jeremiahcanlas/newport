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
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Formik, Form } from "formik";
import FormField from "./FormField";
import * as Yup from "yup";
import axios from "axios";

const ContactForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const [isSubmitted, setSubmitted] = useState(false);

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

  //submitting contact form using nextjs/api
  const handleSubmit = async (values: any) => {
    const { name, email, body } = values;

    const message = JSON.stringify({
      name: name,
      email: email,
      body: body,
    });

    try {
      await axios.post("/api/submitForm", message, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setSubmitted(true);
    } catch (e) {
      toast({
        position: "top",

        render: () => (
          <Box
            borderRadius={"0.3em"}
            backgroundColor="red.400"
            padding="2em"
            mx="auto"
          >
            <Text color={"black"} fontWeight={"400"}>
              {"Server Error, Try again in a few..."}
            </Text>
          </Box>
        ),
        duration: 3000,
      });
    }
  };

  return (
    <>
      <Button
        variant={"outline"}
        size="lg"
        borderRadius="2px"
        onClick={onOpen}
        mt="2em"
        disabled
        _focus={{ outline: "none" }} // this removes chakra ui weird focus border
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
          {/* if form is not submitted then it will render contact form */}
          {!isSubmitted ? (
            <>
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

              <ModalCloseButton
                _focus={{ outline: "none" }} // this removes chakra ui weird focus border
              />

              <ModalBody>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    body: "",
                  }}
                  onSubmit={handleSubmit}
                  validationSchema={validateForm}
                >
                  {({ isSubmitting }: any) => {
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
                          borderRadius="2px"
                          isLoading={isSubmitting}
                          type="submit"
                        >
                          Submit
                        </Button>
                      </Form>
                    );
                  }}
                </Formik>
              </ModalBody>
            </>
          ) : (
            <>
              <Box>
                <ModalHeader
                  pb="0"
                  fontSize={"2em"}
                  fontWeight={700}
                  letterSpacing="1.4px"
                >
                  Thanks
                </ModalHeader>
                <Text mx="24px" fontSize={"0.8em"} fontWeight={200}>
                  {"no, really I mean it."}
                </Text>
                <Text mt="1em" mx="24px" fontSize={"1em"} fontWeight={200}>
                  {"Your message has successfully been sent, talk soon."}
                </Text>
              </Box>

              <ModalCloseButton />
            </>
          )}

          <ModalFooter>
            <Button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              _focus={{ outline: "none" }} // this removes chakra ui weird focus border
              borderRadius="2px"
              size="sm"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactForm;
