import { CloseIcon } from "@chakra-ui/icons";
import { Avatar as UserAvatar, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineShoppingCart } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsLogin } from "../../store/loginSlice";

export default function Avatar() {
  // redux
  const dispatch = useDispatch();

  const [on, setOn] = useState(false);
  const navigate = useNavigate();
  return (
    <Box position="relative"  >
      <UserAvatar
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
        onClick={() => setOn(true)}
      />
      {on ? (
        <Box
          position="absolute"
          top={12}
          right={0}
          zIndex={1}
          shadow="md"
          bg="gray.400"
          p={5}
          borderRadius="md"
        >
          <Button
            onClick={() => {
              setIsLogin(false);
              navigate("/cart");
            }}
            w="full"
          >
            <AiOutlineShoppingCart style={{ marginRight: "9px" }} />
            Cart
          </Button>
          <Button onClick={() => dispatch(setIsLogin(false))} w="full" mt={3}>
            <AiOutlineCloseCircle style={{ marginRight: "9px" }} />
            Logout
          </Button>

          <CloseIcon
            position="absolute"
            top={2}
            right={2}
            w={2}
            h={2}
            onClick={() => setOn(false)}
            cursor="pointer"
          />
        </Box>
      ) : null}
    </Box>
  );
}
