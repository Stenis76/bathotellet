import React from "react";
import {
  FormField,
  Box,
  Header,
  Image,
  TextInput,
  Heading,
  Button
} from "grommet";
import { Search } from "grommet-icons";
import logo from "../resources/motor.svg";

interface Iprops {}

const MyHeader = (props: Iprops) => {
  return (
    <Header background="brand" pad="small" elevation="medium" justify="between">
      <Box direction="row" gap="small">
        <Image src={logo} height="45" />
        <Heading size="small" alignSelf="center" margin="xsmall">
          Båthotell
        </Heading>
      </Box>
      <Box direction="row" gap="small">
        <FormField>
          <TextInput placeholder="Vad söker du?" />
        </FormField>
        <Button plain={false} icon={<Search />}></Button>
      </Box>
    </Header>
  );
};

export default MyHeader;
