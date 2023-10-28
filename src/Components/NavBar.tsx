import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between">
        <Image src={logo} boxSize={"55px"}></Image>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
