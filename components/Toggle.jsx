import { useColorMode, Button, Icon } from "@chakra-ui/react";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { FiSun, FiSunset } from "react-icons/fi";

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button variant={"ghost"} size={"md"} onClick={toggleColorMode}>
      <Icon fontSize={"1.2em"} as={colorMode === "light" ? FiSunset : FiSun} />
    </Button>
  );
};

export default Toggle;
