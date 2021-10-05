import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
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
        bgGradient={useColorModeValue(
          "linear-gradient(300deg, yellow.300, yellow.400)",
          "linear-gradient(300deg, yellow.400, yellow.500)"
        )}
      >
        <Box w="100%" maxW="4xl">
          <Heading
            as="h1"
            fontSize={["4xl", "6xl"]}
            color={useColorModeValue("warmGray.800", "warmGray.200")}
            textShadow="md"
          >
            {title}
          </Heading>
        </Box>
      </Flex>
    </>
  );
};

export { PageHeader };
