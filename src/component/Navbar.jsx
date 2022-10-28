import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

const Links = ["Programming", "COVID-19", "Saved"];

const NavLink = ({ children }) => (
  <Link style={{ padding: "2rem 1rem" }} to={children}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    navigate(`/search/${data.get("search")}`)
  };

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
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            ></MenuButton>
          </Menu>
        </Flex>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Input
            width={200}
            placeholder="Search..."
            mr={2}
            backgroundColor="white"
            name="search"
          />
          <Button type="submit" colorScheme="blue">
            Cari Berita
          </Button>{" "}
        </form>
      </Flex>
    </Box>
  );
}
