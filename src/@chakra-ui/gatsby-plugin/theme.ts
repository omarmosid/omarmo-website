import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: props => ({
      body: {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("gray.100", "gray.800")(props),
        lineHeight: "base",
      },
      a: {
        color: "primary",
        textDecoration: "underline",
      },
      ".content": {
        "h1, h2, h3, h4, h5, h6": {
          fontWeight: "bold",
          letterSpacing: "tight",
          lineHeight: "shorter",
          mt: 12,
          mb: 6,
        },
        h1: {
          fontSize: "4xl",
        },
        h2: {
          fontSize: "3xl",
        },
        h3: {
          fontSize: "2xl",
        },
        h4: {
          fontSize: "xl",
        },
        h5: {
          fontSize: "lg",
        },
        h6: {
          fontSize: "md",
        },
        p: {
          lineHeight: "tall",
          margin: "0",
          marginBottom: 8,
          padding: 0,
          fontSize: "md",
        },
        "ul, ol": {
          marginLleft: 0,
          marginRight: 0,
          padding: 0,
          marginBottom: 8,
          listStylePosition: "inside",
          listStyleImage: "none",
        },
        "ul li, ol li": {
          paddingLeft: 0,
          marginBottom: 4,
        },

        "li > p": {
          marginBottom: 4,
          display: "initial",
        },

        "li *:last-child": {
          marginBottom: 0,
        },

        "li > ul": {
          marginLeft: 6,
          marginTop: 4,
        },

        blockquote: {
          color: mode("gray.800", "whiteAlpha.900")(props),
          marginLeft: "-24px",
          marginRight: 8,
          padding: "0 0 0 24px",
          borderColor: "teal.400",
          borderLeft: "4px solid",
          fontSize: "lg",
          fontStyle: "italic",
          marginBottom: 8,
          p: {
            fontSize: "inherit",
          },
        },

        "blockquote > :last-child": {
          marginBottom: 0,
        },

        "blockquote > ul, blockquote > ol": {
          listStylePosition: "inside",
        },

        table: {
          width: "100%",
          marginTop: 4,
          marginBottom: 8,
          borderCollapse: "collapse",
          borderSpacing: "0.25rem",
        },

        "table thead tr th": {
          borderBottom: "1px solid",
          borderColor: "teal.400",
        },

        "div.gatsby-highlight": {
          marginBottom: 8,
        },
      },
    }),
  },
});

export default theme;
