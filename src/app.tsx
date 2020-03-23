import React from "react";
import MyHeader from "./components/header";
import Home from "./pages/home";

import { Grommet, grommet, ResponsiveContext, Box } from "grommet";
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

function App() {
  return (
    <Grommet theme={customTheme}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <MyHeader />
            <Sidebar />
            <Home />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
