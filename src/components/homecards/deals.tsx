import React from "react";
import { Box, Heading, Button } from "grommet";
import picture from "../../resources/thierry-meier-PKEPAeMBOIU-unsplash.jpg";

interface Iprops {}

const Deals = (props: Iprops) => {
  const pic = `url(${picture})`;
  return (
    <Box
      justify="center"
      round="small"
      gridArea="deals"
      elevation="medium"
      background={pic}
    ></Box>
  );
};

export default Deals;
