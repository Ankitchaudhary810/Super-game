import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchINput from "./SearchINput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <div>
      <HStack>
        <Image
          src={logo}
          boxSize={"40px"}
          borderRadius={"8px"}
          marginX={"5px"}
          marginY={"6px"}
        ></Image>
        <SearchINput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
