import { Box, Heading, Text } from "@chakra-ui/layout";
import { FullLayout } from "../components/layout";
import { CustomLink } from "../components/Link";

const Home = () => {
  return (
    <>
      <FullLayout>
        <Box pt={24} pb={10}>
          <Heading as="h1" pb={4} fontSize={["4xl", "6xl"]}>
            Hi! I'm Omar.
          </Heading>
          <Text fontSize={["xl", "2xl"]}>
            I am self-taught Full-Stack Developer passionate about building
            products with delightful user experiences. I happen to be a data
            geek and I am an obsessed collector of beautiful visualizations. I
            also thoroughly enjoy reading{" "}
            <CustomLink to="https://amzn.to/38HCMIW" isExternal>
              historical fictions
            </CustomLink>{" "}
            and playing role-playing games.
          </Text>
        </Box>
      </FullLayout>
    </>
  );
};

export default Home;
