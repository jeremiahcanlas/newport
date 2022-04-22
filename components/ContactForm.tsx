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
import { useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import FormField from "./FormField";
import * as Yup from "yup";
import axios from "axios";

const ContactForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

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
      console.log(e);
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

              <ModalCloseButton />

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
            </>
          ) : (
            // FIX THIS SHIT PLEASE.
            <div>Successfully Submitted.</div>
          )}

          <ModalFooter>
            <Button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
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
