import { useColorMode, Button, Icon, Box } from "@chakra-ui/react";
import { CgMoon, CgSun } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <Box
      pos={"sticky"}
      top={0}
      p="0.8em"
      zIndex={100}
      bgGradient={
        colorMode === "light"
          ? "linear-gradient(to-t,rgba(255,255,255,0),rgba(255,255,255,1) 40%)"
          : "linear-gradient(to-t,rgba(17,20,28,0),rgba(17,20,28,1) 40%)"
      }
    >
      <Box textAlign={"right"}>
        {router.pathname === "/resume" && (
          <Link href={"/"} passHref>
            <Button
              variant={"ghost"}
              size={"md"}
              _focus={{ outline: "none" }} // this removes chakra ui weird focus border
            >
              <Icon fontSize={["1.2em", "2em"]} as={AiFillHome} />
            </Button>
          </Link>
        )}
        <Button
          variant={"ghost"}
          size={"md"}
          onClick={toggleColorMode}
          _focus={{ outline: "none" }} // this removes chakra ui weird focus border
        >
          <Icon
            fontSize={["1.2em", "2em"]}
            as={colorMode === "light" ? CgMoon : CgSun}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default Toggle;
