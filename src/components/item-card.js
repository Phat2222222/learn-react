import React from "react";
import { Box, Text, Image, Button, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function CardItems({ item }) {
  const navigate = useNavigate();
  return (
    <Box
      borderRadius={10}
      borderWidth={2}
      borderColor="black"
      display="flex"
      flexDirection="column"
      p={2}
    >
      <Image
        borderRadius={10}
        src={item.image}
        alt={item.name}
        w="full"
        h={200}
        objectFit="cover"
      />
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Text fontSize="20" fontWeight="bold">
            {item.name}
          </Text>
          <Text>{item.price}$</Text>
        </Box>

        <Button mt={2} onClick={() => navigate(`/${item.id}`)}>
          BUY
        </Button>
      </Box>
    </Box>
  );
}
