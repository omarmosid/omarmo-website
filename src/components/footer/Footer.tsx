import { Box } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <>
      <Box as="footer" p={4}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </Box>
    </>
  );
};

export { Footer };
