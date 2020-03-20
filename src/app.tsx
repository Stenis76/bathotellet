import React from "react";
import MyHeader from "./components/header";
import { Grommet, Heading } from "grommet";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px"
    }
  }
};

function App() {
  return (
    <Grommet theme={theme}>
      <MyHeader />
      <Heading level="3">Dick Rules</Heading>
    </Grommet>
  );
}

export default App;
