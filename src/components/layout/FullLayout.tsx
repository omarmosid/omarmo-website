import { Box } from "@chakra-ui/layout";
import React, { ReactNode } from "react";
import { Nav } from "../../components/nav";
import { Footer } from "../footer";
import { ScrollToTop } from "../utility/ScrollToTop";

type FullLayoutProps = {
  Header?: ReactNode;
};

const FullLayout: React.FC<FullLayoutProps> = ({ Header, children }) => {
  return (
    <>
      <Nav />
      <Box id="main-start">
        {Header && Header}
        <Box
          as="main"
          margin="0 auto"
          maxW="4xl"
          minH="calc(100vh - 60px)"
          py={[4, 10]}
          px={6}
        >
          {children}
        </Box>
        <Footer />
      </Box>
      <ScrollToTop />
    </>
  );
};

export { FullLayout };
