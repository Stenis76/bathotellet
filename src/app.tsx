import React, { useState } from "react";
import MyHeader from "./components/header";
import Home from "./pages/home";

import { Grommet, grommet, Grid, Button, Box, Text } from "grommet";
import { deepMerge } from "grommet/utils";
import Sidebar from "./components/sidebar";

const customTheme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#000060",
      acc: "#7CB3C5",
      beige: "#E8D5B5",
      "background-back": {
        dark: "#1A1F2B",
        light: "#EFEFEF"
      },
      "background-front": {
        dark: "#222938",
        light: "#FFFFFF"
      },
      "background-contrast": {
        dark: "#E8D5B5",
        light: "#E8D5B5"
      },
      "background-custom": {
        dark: "#0E5265",
        light: "#00C8FF"
      }
    },
    font: {
      family: "Raleway",
      size: "18px",
      height: "20px"
    }
  }
});

const App = () => {
  return (
    <Grommet theme={customTheme}>
      <Box height="100vh">
        <Grid
          fill
          rows={["auto", "flex"]}
          columns={["auto", "flex"]}
          areas={[
            { name: "header", start: [0, 0], end: [1, 0] },
            { name: "sidebar", start: [0, 1], end: [0, 1] },
            { name: "main", start: [1, 1], end: [1, 1] }
          ]}
        >
          <MyHeader />
          <Sidebar />
          <Home />
        </Grid>
      </Box>
    </Grommet>
  );
};

export default App;
