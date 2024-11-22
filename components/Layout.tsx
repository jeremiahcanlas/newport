import Footer from "./Footer"
import { Container, useColorMode } from "@chakra-ui/react"

const Layout = ({ children }: any) => {
  const { colorMode } = useColorMode()

  return (
    <Container
      bg={colorMode === "light" ? "whiteAlpha.300" : "blackAlpha.500"}
      className="scroll-top"
      style={{maxWidth:'100%',height:'100%',padding:"none"}}
    >
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
