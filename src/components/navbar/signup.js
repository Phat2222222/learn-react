import {
  Box,
  Text,
  Button,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Center,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { FaMicrosoft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useOpenModal from "../../hooks/useOpenModal";

export default function Signup({ setIsLogin }) {
  const { open, handleOpen } = useOpenModal();
  return (
    <>
      <Button onClick={handleOpen}>Signup</Button>
      <Modal isOpen={open} onClose={handleOpen}>
        <ModalOverlay />
        <ModalContent>
          <Center display="flex" flexDirection="column">
            <Text fontSize="40" fontWeight="bold">
              SIGN UP
            </Text>
            <Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box>
                  <Text fontWeight="bold" style={{ fontStyle: "italic" }}>
                    Email:
                  </Text>
                  <Input
                    placeholder="..."
                    htmlSize={4}
                    w="250px"
                    borderWidth="5"
                    borderColor="black"
                  />

                  <Text fontWeight="bold" style={{ fontStyle: "italic" }}>
                    Password:
                  </Text>
                  <Input
                    placeholder="..."
                    htmlSize={4}
                    w="250px"
                    borderWidth="5"
                    borderColor="black"
                  />
                  <Text fontWeight="bold" style={{ fontStyle: "italic" }}>
                    Phone number:
                  </Text>
                  <Input
                    placeholder="..."
                    htmlSize={4}
                    w="250px"
                    borderWidth="5"
                    borderColor="black"
                  />
                </Box>

                <Button
                  my={2}
                  bg="teal"
                  onClick={() => {
                    handleOpen();
                    setIsLogin(true);
                  }}
                >
                  SIGN UP
                </Button>
              </Box>
            </Box>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
