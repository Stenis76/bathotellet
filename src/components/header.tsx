import React from "react";
import { Anchor, Box, Header } from "grommet";

interface Iprops {}

const MyHeader = (props: Iprops) => {
  return (
    <Header background="light-4" pad="small">
      <Box direction="row" gap="medium">
        <Anchor label="Home" href="#" />
        <Anchor label="Profile" href="#" />
      </Box>
    </Header>
  );
};

export default MyHeader;
