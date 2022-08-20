import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLogin } from "../../store/loginSlice";
import Avatar from "./avatar";
import Login from "./login";
import Signup from "./signup";

export default function Navbar() {
  // redux
  const isLoginState = useSelector(isLogin);  

  // navigate
  const navigate = useNavigate();

  return (
    <Box
      shadow="md"
      w="full"
      p={2}
      display="flex"
      justifyContent="space-between"
     
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        onClick={() => navigate("/")}
        cursor="pointer"
      >
        BookStore
      </Text>
      <Box display="flex" gap={2}>
        {isLoginState === true ? (
          <Avatar />
        ) : (
          <>
            {/* <Signup /> */}
            <Login  />
          </>
        )}
      </Box>
    </Box>
  );
}

