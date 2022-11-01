import React from "react";
import { useDisclosure, useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const useNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchValue, setSearchValue] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(`/search/${searchValue}`);
    setSearchValue("");
  };

  return {
    isOpen,
    onOpen,
    onClose,
    colorMode,
    toggleColorMode,
    searchValue,
    setSearchValue,
    handleSubmit,
  };
};
