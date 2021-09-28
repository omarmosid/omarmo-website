import { IconButton } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import scrollTo from "gatsby-plugin-smoothscroll";
import { BsArrowUp } from "react-icons/bs";

type ScrollToTopProps = {};

const ScrollToTop: React.FC<ScrollToTopProps> = () => {
  return (
    <>
      <Box position="fixed" bottom={["4", "8"]} right={["4", "8"]}>
        <IconButton
          aria-label="Scroll to top"
          onClick={() => scrollTo("#main-start")}
          icon={<BsArrowUp />}
        />
      </Box>
    </>
  );
};

export { ScrollToTop };
