import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between">
        <Image
          src={logo}
          boxSize={"40px"}
          borderRadius={"8px"}
          marginX={"5px"}
          marginY={"6px"}
        ></Image>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
