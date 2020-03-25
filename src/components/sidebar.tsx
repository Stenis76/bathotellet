import React from "react";
import { Anchor, Box, Header, Button, Text } from "grommet";

interface Iprops {}

const Sidebar = (props: Iprops) => {
  return (
    <Box fill gridArea="sidebar" background="light-1" width="small">
      {[
        "Vinterförvaring",
        "Bli kund",
        "Vattenpolering",
        "Partners",
        "Båtförsäljning"
      ].map(name => (
        <Button key={name} href="#" hoverIndicator margin="small">
          <Box pad={{ horizontal: "medium", vertical: "small" }}>
            <Text>{name}</Text>
          </Box>
        </Button>
      ))}
    </Box>
  );
};

export default Sidebar;
