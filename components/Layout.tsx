import Footer from "./Footer";
import { Container, useColorMode } from "@chakra-ui/react";

const Layout = ({ children }: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      maxW="100%"
      px="0"
      height="100%"
      bg={colorMode === "light" ? "whiteAlpha.300" : "blackAlpha.500"}
    >
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
