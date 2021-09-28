import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/layout";
import { Link as GatsbyLink } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { truncate } from "lodash";

type ContentCardProps = {
  title: string;
  link: string;
  date: string;
  description?: string;
  excerpt?: string;
  image?: any;
};

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  link,
  date,
  description,
  excerpt,
  image,
}) => {
  return (
    <>
      <Box
        as={GatsbyLink}
        to={link}
        p={6}
        bg={useColorModeValue("white", "warmGray.800")}
        boxShadow="lg"
        rounded="md"
        overflow={"hidden"}
        itemScope
        itemType="http://schema.org/Article"
      >
        <Box h="240px" bg={`gray.500`} mt={-6} mx={-6} mb={6} pos={"relative"}>
          <GatsbyImage
            image={image}
            alt={`${title} Featured Image`}
            objectFit="cover"
            imgStyle={{
              height: "240px",
              width: "100%",
              margin: "0 auto",
            }}
          />
        </Box>
        <Stack>
          <Heading as="h2" fontSize="2xl">
            {truncate(title, {
              length: 60,
            })}
          </Heading>
          <Text fontSize="xs">{description || excerpt}</Text>
        </Stack>
      </Box>
    </>
  );
};

export { ContentCard };
