import React from "react";
import { Main, Box, Button, Text, Heading, Paragraph, Grid } from "grommet";
import News from "../components/homecards/news";
import Info from "../components/homecards/info";
import Deals from "../components/homecards/deals";
import Events from "../components/homecards/events";

function Home() {
  return (
    <Main gridArea="main" background="light-1">
      <Grid
        fill="vertical"
        rows={["auto", "auto", "auto"]}
        columns={["1/4", "1/2", "auto"]}
        gap="medium"
        margin="medium"
        areas={[
          { name: "info", start: [0, 0], end: [0, 1] },
          { name: "deals", start: [0, 2], end: [2, 2] },
          { name: "news", start: [1, 0], end: [2, 1] },
          { name: "events", start: [2, 0], end: [2, 2] }
        ]}
      >
        <Info />
        <Deals />
        <News />

        <Events />
      </Grid>
    </Main>
  );
}

export default Home;
