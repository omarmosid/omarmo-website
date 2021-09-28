import { Flex, Grid } from "@chakra-ui/layout";
import React from "react";

const CardContainer = ({ children }) => {
  return (
    <Grid
      p={2}
      templateColumns="repeat(auto-fit, minmax(280px, 360px))"
      justifyContent="start"
      gap={8}
    >
      {children}
    </Grid>
  );
};

export default CardContainer;
