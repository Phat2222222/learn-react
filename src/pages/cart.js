import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  IconButton,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { listShoe } from "../data";

export default function Cart() {
  return (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {listShoe.map((shoe, index) => (
            <Tr key={index}>
              <Td>{shoe.stt} </Td>
              <Td>
                <Image
                  src={shoe.image}
                  alt="item"
                  w="100"
                  h={100}
                />
              </Td>
              <Td>{shoe.name}</Td>
              <Td>{shoe.price}</Td>
              <Td>3</Td>
              <Td>
                <IconButton as={AddIcon} w={22} h={22} />
                <IconButton as={MinusIcon} w={22} h={22} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
