import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

type ContentHeaderProps = {
  title: string;
  date: string;
  summary?: string;
  featuredImage?: any;
};

const ContentHeader: React.FC<ContentHeaderProps> = ({
  title,
  date,
  summary,
  featuredImage,
}) => {
  return (
    <>
      <Box margin="0 auto" maxW="3xl" pt={[4, 7, 10]} pb={1} px={6}>
        <Heading
          as="h1"
          pb={[1, 2, 3]}
          fontSize={["3xl", "4xl", "5xl"]}
          itemProp="headline"
          id="header"
          color="brand.500"
        >
          {title}
        </Heading>
        <Text pb={2}>{date}</Text>
        {summary && "Test"}
        <Text
          fontSize={["md", "lg", "xl"]}
          fontWeight="400"
          fontStyle="italic"
          pb={[4, 6, 8]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          dignissimos corrupti, perferendis quis recusandae natus ducimus?
          Inventore voluptate quam voluptates corporis amet totam harum
          reiciendis soluta debitis, deleniti modi nostrum voluptatem dolores
          laborum ducimus! Molestias dignissimos est temporibus non labore.
        </Text>
      </Box>

      <Flex w="100%" height="50vh" justifyContent="center">
        <GatsbyImage
          image={featuredImage}
          alt={`${title} Featured Image`}
          objectFit="cover"
          imgStyle={{
            height: "50vh",
            width: "100%",
            margin: "0 auto",
          }}
        />
      </Flex>
    </>
  );
};

export { ContentHeader };
