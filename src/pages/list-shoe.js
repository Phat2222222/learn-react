import React from "react";
import { Box, Text, Image, Button, SimpleGrid } from "@chakra-ui/react";
import { listShoe } from "../data";
import CardItems from "../components/item-card";
export default function ListShoe() {
  return (
    <Box p="2">
      <Text fontSize="2xl" mb={3}>
        Items
      </Text>
      
      <SimpleGrid columns={3} spacing={10}>
       {listShoe.map((shoe, index) => (
          <CardItems item={shoe} key={shoe.id} />
        ))}
      </SimpleGrid>
      
    </Box>
  );
}
