import { Box, Image, Text, Button, background } from "@chakra-ui/react";
import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate, useParams } from "react-router-dom";
import { listShoe } from "../data";
import { GiShoppingCart } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { handleOpen, isLogin } from "../store/loginSlice";

export default function DetailShoe() {
  const navigate = useNavigate();
  
  const { id } = useParams();

  const result = listShoe.find((s) => s.id.toString() === id);

  // redux
  const isLoginState = useSelector(isLogin);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (isLoginState === true) {
      navigate("/cart");
    } else {
      dispatch(handleOpen());
    }
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={-5} mt={-5}>
        <Text fontSize="xl">
          <ArrowBackIcon cursor="pointer" onClick={() => navigate("/")} />{" "}
          Shoe's detail
        </Text>
      </Box>

      <Box display="flex" gap={9} mt={10}>
        <Image
          src={result.image}
          alt="shoe"
          w={300}
          h={300}
          borderRadius={10}
        />

        <Box
          w="full"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Text>
            <span style={{ fontSize: 24, fontWeight: "bold" }}>
              {result.name}
            </span>{" "}
            -{result.price}$
          </Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Text>

          <Button w={200} onClick={handleAddToCart}>
            <GiShoppingCart />
            Add to cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
