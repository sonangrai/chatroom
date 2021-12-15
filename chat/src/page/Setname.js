import React from "react";
import { Container } from "../componants/layout/Container.styled";
import {
  Box,
  Button,
  Form,
  Input,
  Title,
} from "../componants/Setname/Setname.styled";

const Setname = () => {
  return (
    <Container image="https://cdn.pixabay.com/photo/2014/07/01/15/40/balloon-381334_1280.png">
      <Box>
        <Title>
          <h2>Set your Nickname</h2>
        </Title>
        <Form>
          <Input />
          <Button>Set name</Button>
        </Form>
      </Box>
    </Container>
  );
};

export default Setname;
