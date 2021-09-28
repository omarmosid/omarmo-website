import { Box, Flex, Heading } from "@chakra-ui/layout";
import React from "react";

type PageHeaderProps = {
  title: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <>
      <Flex
        height={[`20vh`]}
        width="100%"
        justifyContent="center"
        alignItems="flex-end"
        p={10}
        bgGradient="linear-gradient(45deg, brand.400, brand.600)"
      >
        <Box w="100%" maxW="4xl">
          <Heading as="h1" fontSize={["4xl", "6xl"]} color="gray.100">
            {title}
          </Heading>
        </Box>
      </Flex>
    </>
  );
};

export { PageHeader };
