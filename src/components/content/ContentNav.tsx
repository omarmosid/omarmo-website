import { Box } from "@chakra-ui/layout";
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
      {JSON.stringify({
        previous,
        next,
      })}
      <Box as="nav" pt="4">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <CustomLink to={previous.link} rel="prev">
                ← {previous.title}
              </CustomLink>
            )}
          </li>
          <li>
            {next && (
              <CustomLink to={next.link} rel="next">
                {next.title} →
              </CustomLink>
            )}
          </li>
        </ul>
      </Box>
    </>
  );
};

export { ContentNav };
