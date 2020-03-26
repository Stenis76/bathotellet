import React from "react";
import {
  FormField,
  Box,
  Header,
  Image,
  TextInput,
  Heading,
  Anchor
} from "grommet";
import { Home, Contact, Share } from "grommet-icons";
import logo from "../resources/motor.svg";

interface Iprops {}

const MyHeader = (props: Iprops) => {
  return (
    <Header
      gridArea="header"
      background="brand"
      pad="small"
      elevation="large"
      justify="between"
    >
      <Box direction="row" gap="small">
        <Image src={logo} height="45" />
        <Heading size="small" alignSelf="center" margin="xsmall">
          Båthotellet
        </Heading>
      </Box>
      <Box direction="row" gap="small">
        <FormField>
          <TextInput placeholder="Vad söker du?" />
        </FormField>

        <Anchor icon={<Home color="#81D6C3" />} />
        <Anchor icon={<Contact color="#81D6C3" />} />
        <Anchor icon={<Share color="#81D6C3" />} />
      </Box>
    </Header>
  );
};

export default MyHeader;
