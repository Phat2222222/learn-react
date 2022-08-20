import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar";

export default function Layout() {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.md" pt={10} bg="white.100">
        <Outlet />
      </Container>
    </Box>
  );
}
