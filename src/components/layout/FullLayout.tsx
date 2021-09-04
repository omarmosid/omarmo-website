import { Box } from "@chakra-ui/layout";
import React, { ReactNode } from "react";
import { Nav } from "../../components/nav";
import { Footer } from "../footer";
import { ScrollToTop } from "../utility/ScrollToTop";

type FullLayoutProps = {
  Header?: ReactNode;
}

const FullLayout: React.FC<FullLayoutProps> = ({ Header, children }) => {
  return (
    <>
      <Nav />
      {Header && Header}
      <Box margin="0 auto" maxW="3xl" minH="85vh" py={[4, 10]} px={6}>
        <main>{children}</main>
      </Box>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export { FullLayout };
