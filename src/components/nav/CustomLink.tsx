import { Link, LinkProps } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";

export type CustomLinkProps = {
  isExternal?: boolean;
  to: string;
} & Omit<LinkProps, "href">;

const CustomLink: React.FC<CustomLinkProps> = ({
  isExternal = false,
  to,
  children,
  ...linkProps
}) => {
  if (isExternal) {
    return (
      <Link
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        color="brand.500"
        textDecoration="underline"
        {...linkProps}
      >
        {children}
      </Link>
    );
  }
  return (
    <>
      <Link as={GatsbyLink} to={to} colorScheme="yellow" {...linkProps}>
        {children}
      </Link>
    </>
  );
};

export { CustomLink };
