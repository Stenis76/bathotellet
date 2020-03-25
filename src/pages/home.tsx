import React from "react";
import { Main, Box, Button, Text, Heading, Paragraph, Grid } from "grommet";

function Home() {
  return (
    <Main gridArea="main" background="dark-5">
      <Grid
        fill="vertical"
        rows={["auto", "auto", "auto"]}
        columns={["auto", "1/2", "auto"]}
        gap="medium"
        margin="medium"
        areas={[
          { name: "about", start: [0, 0], end: [0, 1] },
          { name: "deals", start: [0, 2], end: [2, 2] },
          { name: "customers", start: [1, 0], end: [2, 1] },
          { name: "fallCollection", start: [2, 0], end: [2, 2] }
        ]}
      >
        <Box gridArea="about" background="green">
          about
        </Box>
        <Box gridArea="deals" background="blue">
          Deals
        </Box>
        <Box gridArea="customers" background="light-2">
          customers
        </Box>
        <Box gridArea="fallCollection" background="red">
          fall
        </Box>
      </Grid>
    </Main>
  );
}

export default Home;
