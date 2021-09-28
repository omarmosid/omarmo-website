import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  fonts: {
    heading: "Tinos",
    body: "Open Sans",
  },
  colors: {
    warmGray: {
      50: "#FAFAF9",
      100: "#F5F5F4",
      200: "#E7E5E4",
      300: "#D6D3D1",
      400: "#A8A29E",
      500: "#78716C",
      600: "#57534E",
      700: "#44403C",
      800: "#292524",
      900: "#1C1917",
    },
    brand: {
      50: "#251162",
      75: "#1E1571",
      100: "#191D80",
      200: "#1D328F",
      300: "#224A9E",
      400: "#2765AC",
      500: "#2C82BA",
      600: "#46ABC5",
      700: "#61CDD0",
      800: "#7CDACB",
      900: "#98E3C9",
      950: "#B5ECCE",
      975: "#D2F4DB",
    },
  },
  styles: {
    global: props => ({
      body: {
        fontFamily: "body",
        color: mode("warmGray.800", "whiteAlpha.900")(props),
        bg: mode("warmGray.100", "warmGray.900")(props),
        lineHeight: "base",
      },
      "p, ul, ol, span, li": {
        color: mode("warmGray.600", "whiteAlpha.600")(props),
      },
      ".heading-anchor": {
        svg: {
          fill: mode("gray.800", "whiteAlpha.900")(props),
          visibility: "initial",
        },
      },
      ".content": {
        "h1, h2, h3, h4, h5, h6": {
          fontFamily: "heading",
          fontWeight: "bold",
          letterSpacing: "tight",
          lineHeight: "shorter",
          mt: 12,
          mb: 4,
          color: mode("brand.400", "brand.600")(props),
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
          marginBottom: 6,
          padding: 0,
          fontSize: "lg",
        },
        a: {
          color: mode("brand.400", "brand.600")(props),
          textDecoration: "underline",
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
          fontSize: "lg",
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
