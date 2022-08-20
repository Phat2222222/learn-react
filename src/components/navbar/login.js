import {
  Box,
  Button,
  Center,
  Divider,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaMicrosoft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import useOpenModal from "../../hooks/useOpenModal";
import { isOpen, handleOpen, setIsLogin } from "../../store/loginSlice";

export default function Login() {
  const isOpenModal = useSelector(isOpen);
  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={() => dispatch(handleOpen())}>Login</Button>
      <Modal isOpen={isOpenModal} onClose={() => dispatch(handleOpen())}>
        <ModalOverlay />
        <ModalContent>
          <Center display="flex" flexDirection="column">
            <Text fontSize="40" fontWeight="bold">
              Login
            </Text>
            <Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box>
                  <Text fontWeight="bold" style={{ fontStyle: "italic" }}>
                    ID:
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
                </Box>

                <Button
                  mt={2}
                  bg="teal"
                  onClick={() => {
                    dispatch(setIsLogin(true));
                    dispatch(handleOpen());
                  }}
                >
                  LOGIN
                </Button>
              </Box>

              <Divider w="full" bg="black" my={5} h={0.5} />
            </Box>

            <Box display="flex" gap="5" mb={4}>
              <FcGoogle />
              <FaMicrosoft />
            </Box>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
