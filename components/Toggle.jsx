import { useColorMode, Button, Icon } from "@chakra-ui/react";
import { FiSun, FiSunset } from "react-icons/fi";

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      variant={"ghost"}
      size={"md"}
      onClick={toggleColorMode}
      _focus={{ outline: "none" }} // this removes chakra ui weird focus border
    >
      <Icon fontSize={"1.2em"} as={colorMode === "light" ? FiSunset : FiSun} />
    </Button>
  );
};

export default Toggle;
