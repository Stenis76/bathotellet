import React from "react";
import { Box, Heading, Button } from "grommet";
import picture from "../../resources/IMG_3880.jpeg";

interface Iprops {}

const Info = (props: Iprops) => {
  const pic = `url(${picture})`;
  return (
    <Box
      justify="center"
      round="small"
      gridArea="info"
      elevation="medium"
      background={pic}
    ></Box>
  );
};

export default Info;
