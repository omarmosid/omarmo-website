import { Box } from "@chakra-ui/layout";
import React from "react";
import { Nav } from "../../components/nav";
import { Footer } from "../footer";

const FullLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <Box margin="0 auto" maxW="3xl" minH="85vh" py={10} px={6}>
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  );
};

export { FullLayout };
