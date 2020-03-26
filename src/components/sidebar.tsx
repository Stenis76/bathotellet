import React from "react";
import { Box, Button, Text } from "grommet";
import { Instagram, Facebook, Linkedin } from "grommet-icons";

interface Iprops {}

const Sidebar = (props: Iprops) => {
  return (
    <Box
      fill
      justify="between"
      gridArea="sidebar"
      background="light-3"
      width="small"
    >
      <Box pad={{ horizontal: "medium", vertical: "small" }}>
        {[
          "Vinterförvaring",
          "Bli kund",
          "Vattenpolering",
          "Partners",
          "Båtförsäljning"
        ].map(name => (
          <Button key={name} href="#" hoverIndicator margin="small">
            <Text>{name}</Text>
          </Button>
        ))}
      </Box>
      <Box
        pad="small"
        justify="evenly"
        direction="row-responsive"
        background="brand"
      >
        <Instagram />
        <Facebook />
        <Linkedin />
      </Box>
    </Box>
  );
};

export default Sidebar;
