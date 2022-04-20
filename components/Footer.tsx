import {
  Text,
  Container,
  Link,
  Icon,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container textAlign="center" py="0.8em">
      <HStack spacing={"1.5em"} justify="center" mx="auto">
        <Link
          href="https://github.com/jeremiahcanlas"
          isExternal
          cursor="pointer"
          _focus={{ outline: "none" }}
        >
          <Icon
            as={FaGithub}
            color={colorMode === "light" ? "black" : "white"}
            fontSize="2em"
            mb="1em"
            opacity="0.8"
            _hover={{ opacity: "1", color: "smoke" }}
          />
        </Link>
        <Link
          href="https://linkedin.com/in/jeremiahcanlas"
          isExternal
          cursor="pointer"
          _focus={{ outline: "none" }}
        >
          <Icon
            as={FaLinkedin}
            color="#0e76a8"
            fontSize="2em"
            mb="1em"
            opacity="0.8"
            _hover={{ opacity: "1", color: "smoke" }}
          />
        </Link>
      </HStack>

      <Text fontWeight="300" fontSize="0.8em" letterSpacing="0.8px">
        {new Date().getFullYear()} Jeremiah Canlas
      </Text>
    </Container>
  );
};

export default Footer;
