import React from "react";
import { Anchor, Box, Header, Button, Text } from "grommet";

interface Iprops {}

const Sidebar = (props: Iprops) => {
  return (
    <Box fill gridArea="sidebar" background="light-3" width="small">
      <Text size="xxlarge"></Text>
      {[
        "Vinterförvaring",
        "Bli kund",
        "Vattenpolering & Vax",
        "Partners",
        "Båtförsäljning"
      ].map(name => (
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
