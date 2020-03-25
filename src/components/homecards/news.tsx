import React from "react";
import { Box, Heading, Button } from "grommet";
import servicepicture from "../../resources/mechanic.jpg";

interface Iprops {}

const News = (props: Iprops) => {
  const pic = `url(${servicepicture})`;
  return (
    <Box
      justify="center"
      round="small"
      gridArea="news"
      elevation="medium"
      background={pic}
    >
      <Heading
        size="medium"
        textAlign="center"
        style={{
          margin: 10,
          padding: 10,
          position: "relative",
          borderRadius: 12,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        }}
      >
        Serva din båt till sommaren
      </Heading>

      <Button
        primary
        alignSelf="center"
        size="medium"
        label="Boka tid"
        onClick={() => {}}
        {...props}
      />
    </Box>
  );
};

export default News;
