import { Button, IconButton } from "@chakra-ui/button";
import { Box, Flex, Grid, Text } from "@chakra-ui/layout";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link as GatsbyLink } from "gatsby";
import { CustomLink } from "../link";

type NextPrevObject = {
  title: string;
  link: string;
} | null;

type ContentNavProps = {
  previous: NextPrevObject;
  next: NextPrevObject;
};

const ContentNav: React.FC<ContentNavProps> = ({ previous, next }) => {
  return (
    <>
      <Grid as="nav" pt="4" templateColumns="1fr 1fr" gap={4}>
        <Flex alignItems="flex-end">
          {previous.title && (
            <GatsbyLink to={previous.link}>
              <Button variant="ghost" leftIcon={<BsArrowLeft />}>
                {previous.title}
              </Button>
            </GatsbyLink>
          )}
        </Flex>
        <Flex justifyContent="flex-end" alignItems="flex-end">
          {next.title && (
            <GatsbyLink to={next.link}>
              <Button variant="ghost" rightIcon={<BsArrowRight />}>
                {next.title}
              </Button>
            </GatsbyLink>
          )}
        </Flex>
        {/* <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous.link && (
              <CustomLink to={previous.link} rel="prev">
                ← {previous.title}
              </CustomLink>
            )}
          </li>
          <li>
            {next.link && (
              <CustomLink to={next.link} rel="next">
                {next.title} →
              </CustomLink>
            )}
          </li>
        </ul> */}
      </Grid>
    </>
  );
};

export { ContentNav };
