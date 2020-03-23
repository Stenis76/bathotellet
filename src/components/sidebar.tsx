import React from "react";
import { Anchor, Box, Header, Button, Text } from "grommet";

interface Iprops {}

const Sidebar = (props: Iprops) => {
  return (
    <Box
      gridArea="sidebar"
      direction="column"
      background="dark-3"
      width="small"
      height="100vh"
      animation={[
        { type: "fadeIn", duration: 300 },
        { type: "slideRight", size: "xlarge", duration: 150 }
      ]}
    >
      <Text size="xxlarge">Sidebar</Text>
      {["First", "Second", "Third"].map(name => (
        <Button key={name} href="#" hoverIndicator>
          <Box pad={{ horizontal: "medium", vertical: "small" }}>
            <Text>{name}</Text>
          </Box>
        </Button>
      ))}
    </Box>
  );
};

export default Sidebar;
