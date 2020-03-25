import React from "react";
import { Box, Image, Text } from "grommet";
import picture from "../../resources/49486851507_606157b610_k.jpg";
import fairlogo from "../../resources/boatfairgbg.png";

interface Iprops {}

const Events = (props: Iprops) => {
  const pic = `url(${picture})`;
  return (
    <Box
      justify="center"
      round="small"
      gridArea="events"
      elevation="medium"
      background={pic}
      alignContent="center"
    >
      {/* <Image
        fit="contain"
        src={fairlogo}
        style={{
          width: "15rem",
          margin: 10,
          padding: 10,
          position: "relative"
        }}
      /> */}
      <Text> Möt oss på båtmässan</Text>
    </Box>
  );
};

export default Events;
