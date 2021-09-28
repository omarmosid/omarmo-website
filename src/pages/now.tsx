import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  List,
  ListItem,
  UnorderedList,
  Text,
  ListIcon,
  Link,
  Heading,
} from "@chakra-ui/layout";
import { graphql, Link as GatsbyLink } from "gatsby";
import { capitalize } from "lodash";
import React from "react";
import {
  FcClapperboard,
  FcMusic,
  FcPuzzle,
  FcReading,
  FcSteam,
} from "react-icons/fc";
import { PageHeader } from "../components/header/PageHeader";
import { FullLayout } from "../components/layout";
import Seo from "../components/seo";

type NowItemType = {
  type: "READING" | "PLAYING" | "WATCHING" | "LISTENING" | "LEARNING";
  description: string;
  link: string;
  isExternal?: boolean;
};

const nowlist: NowItemType[] = [
  {
    type: "READING",
    description: "The Legion (Eagles of the Empire 10)",
    link: "https://www.amazon.in/Legion-Eagles-Empire-10/dp/0755353765",
    isExternal: true,
  },

  {
    type: "READING",
    description: "When Breath Becomes Air",
    link: "https://www.amazon.in/When-Breath-Becomes-Paul-Kalanithi/dp/1847923674",
    isExternal: true,
  },

  {
    type: "PLAYING",
    description: "Days Gone",
    link: "https://store.steampowered.com/app/1259420/Days_Gone/",
    isExternal: true,
  },
];

const NowItemIcon = ({ type }) => {
  if (type === "READING") {
    return <ListIcon as={FcReading} color="green.500" />;
  }
  if (type === "PLAYING") {
    return <ListIcon as={FcSteam} color="green.500" />;
  }
  if (type === "WATCHING") {
    return <ListIcon as={FcClapperboard} color="green.500" />;
  }
  if (type === "LISTENING") {
    return <ListIcon as={FcMusic} color="green.500" />;
  }
  if (type === "LEARNING") {
    return <ListIcon as={FcPuzzle} color="green.500" />;
  }
};

const Now = ({ data }) => {
  return (
    <>
      <Seo title="Now" description="This is what I've been up to" />

      <FullLayout Header={<PageHeader title="Now" />}>
        <Box pt={[4, 8, 10]}>
          <Heading as="h2" fontSize="2xl" pb={4}>
            This is what I've been up to
          </Heading>

          <List
            fontSize={["md", "lg", "xl"]}
            listStylePosition="inside"
            paddingLeft={2}
          >
            {nowlist.map((nowItem: NowItemType) => {
              if (nowItem.isExternal) {
                return (
                  <ListItem>
                    <NowItemIcon type={nowItem.type} />
                    {capitalize(nowItem.type)}{" "}
                    <Link
                      href={nowItem.link}
                      isExternal
                      color={useColorModeValue("brand.400", "brand.600")}
                    >
                      {nowItem.description}
                    </Link>
                  </ListItem>
                );
              }
            })}
          </List>

          <Text mt="2em">
            Last updated on {data.siteBuildMetadata.buildTime}
          </Text>
        </Box>
      </FullLayout>
    </>
  );
};

export const query = graphql`
  query lastUpdated {
    siteBuildMetadata {
      buildTime(formatString: "DD MMM, YYYY")
    }
  }
`;

export default Now;
