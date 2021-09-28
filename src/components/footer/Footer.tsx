import { Box, Flex, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <>
      <Flex as="footer" justifyContent="center" w="100%" py={2}>
        <Text fontSize={["0.6em","xs"]}>
          All Rights Reserved | © {new Date().getFullYear()} | Made by Omar with
          ❤️ and ☕
        </Text>
      </Flex>
    </>
  );
};

export { Footer };
