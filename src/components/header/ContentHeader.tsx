import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

type ContentHeaderProps = {
  title: string;
  date: string;
  description?: string;
  featuredImage?: any;
};

const ContentHeader: React.FC<ContentHeaderProps> = ({
  title,
  date,
  description,
  featuredImage,
}) => {
  return (
    <>
      <Box margin="0 auto" maxW="3xl" pt={[4, 7, 10]} pb={1} px={6}>
        <Heading
          as="h1"
          pb={[1, 2, 3]}
          fontSize={["3xl", "4xl", "6xl"]}
          itemProp="headline"
          id="header"
          color={useColorModeValue("warmGray.700", "warmGray.300")}
        >
          {title}
        </Heading>

        {description && (
          <Text
            fontSize={["md", "lg", "xl"]}
            fontWeight="400"
            fontStyle="italic"
            pb={2}
          >
            {description}
          </Text>
        )}

        <Grid
          w="100%"
          templateColumns="repeat(5, auto)"
          justifyContent="start"
          gap={2}
          fontSize="xs"
          pt={2}
          pb={[4, 6, 8]}
          color={useColorModeValue("gray.600", "gray.400")}
        >
          <Text display="inline-block">{`${"Written by Omar"}`}</Text>
          <span>●</span>
          <Text display="inline-block">{`${date}`}</Text>
          <span>●</span>
          <Text display="inline-block">{`5 mins`}</Text>
        </Grid>
      </Box>

      {featuredImage && (
        <Flex w="100%" height="80vh" justifyContent="center">
          <GatsbyImage
            image={featuredImage}
            alt={`${title} Featured Image`}
            objectFit="cover"
            imgStyle={{
              height: "80vh",
              width: "100%",
              margin: "0 auto",
            }}
          />
        </Flex>
      )}
    </>
  );
};

export { ContentHeader };
