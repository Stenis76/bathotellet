import React from "react";
import { Anchor, Box, Header, Image } from "grommet";
// import logo from '../../'

interface Iprops {}

const MyHeader = (props: Iprops) => {
  return (
    <Header background="background-contrast" pad="small">
      <Box direction="row" gap="medium">
        <Image src="/map.jpeg" />
        <Anchor label="Home" href="#" />
        <Anchor label="Profile" href="#" />
      </Box>
    </Header>
  );
};

export default MyHeader;
