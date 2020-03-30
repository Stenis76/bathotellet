import React from "react";
import { Box, Image, Text } from "grommet";
import picture from "../../resources/49486851507_606157b610_k.jpg";
import fairlogo from "../../resources/boatfairgbg.png";

interface Iprops {}

const Events = (props: Iprops) => {
  const pic = `url(${picture})`;
  return (
    <Box
      justify="start"
      round="small"
      gridArea="events"
      elevation="medium"
      background={pic}
      align="center"
    >
      <Box
        direction="column"
        margin="small"
        round="medium"
        align="center"
        pad="small"
        background={{
          color: "rgba(0, 0, 0, 0.6)"
        }}
      >
        <Image
          fit="contain"
          src={fairlogo}
          style={{
            width: "15rem",
            margin: 10,
            padding: 10,
            position: "relative"
          }}
        />
        <Text
          size="large"
          color="light-1"
          style={{
            fontStyle: "italic"
          }}
        >
          Träffa oss på båtmässan i Göteborg, vi finns i monter 22:3. Glöm inte
          att ta del av våra mässrabbatter!
        </Text>
      </Box>
    </Box>
  );
};

export default Events;
