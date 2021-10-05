import { Button } from "@chakra-ui/button";
import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/layout";
import GatsbyLink from "gatsby-link";
import { FullLayout } from "../components/layout";
import { CustomLink } from "../components/nav/CustomLink";
import { FcBusinessman, FcBullish, FcBinoculars } from "react-icons/fc";
import { Seo } from "../components/seo";

const Home = () => {
  return (
    <>
      <Seo
        title="Home"
        description="Omar is a self-taught Full-Stack Engineer passionate about harnessing the power of data to build products that delight users."
      />
      <FullLayout>
        <Box pt={28} pb={10}>
          <Heading as="h1" pb={6} fontSize={["4xl", "6xl"]}>
            Hi! I'm Omar.
          </Heading>

          <List fontSize={["md", "lg", "xl"]} listStylePosition="inside">
            <ListItem>
              <ListIcon as={FcBusinessman} color="green.500" />I am a
              self-taught Full-Stack Developer passionate about building
              products that delight users.
            </ListItem>
            <br />
            <ListItem>
              <ListIcon as={FcBullish} color="green.500" />I am a Data geek and
              an obsessed collector of beautiful visualizations.
            </ListItem>
            <br />
            <ListItem>
              <ListIcon as={FcBinoculars} color="green.500" />I also thoroughly
              enjoy reading{" "}
              <CustomLink to="https://amzn.to/38HCMIW" isExternal>
                historical fictions
              </CustomLink>{" "}
              and playing role-playing games.
            </ListItem>
          </List>

          <Box pt={10}>
            {/* <GatsbyLink to="/blog">
              <Button size="md" variant="outline" colorScheme="blue">
                Read Blog
              </Button>
            </GatsbyLink> */}
          </Box>
        </Box>
      </FullLayout>
    </>
  );
};

export default Home;
