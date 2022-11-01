import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useNavbar } from "./useNavbar";

const Links = ["Programming", "COVID-19", "Saved"];

const NavLink = ({ children }) => (
  <Link style={{ padding: "2rem 1rem" }} to={children}>
    {children}
  </Link>
);

export default function Navbar() {
  const {
    isOpen,
    onOpen,
    onClose,
    colorMode,
    searchValue,
    setSearchValue,
    handleSubmit,
    toggleColorMode,
  } = useNavbar();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={"40"}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Link to="/">Indonesia</Link>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Input
            width={200}
            placeholder="Search..."
            mr={2}
            backgroundColor={"Background"}
            name="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button type="submit" colorScheme="blue">
            Cari Berita
          </Button>{" "}
        </form>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Box>
  );
}
