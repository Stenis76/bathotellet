import React from "react";
import { Main, Box, Button, Text, Heading, Paragraph } from "grommet";

function Home() {
  return (
    <Main pad="large" background="dick">
      <Heading>Something</Heading>

      <Paragraph color="brand">Something about something</Paragraph>
      <Box align="center" pad="large" gap="small">
        <Button primary label="deepMerge custom button" onClick={() => {}} />
      </Box>
      <Text>
        The Button font is taken from the grommet theme, while its brand color
        is taken from myCustomTheme.
      </Text>
    </Main>
  );
}

export default Home;
