import React, { useState } from "react";
import { Container } from "../componants/layout/Container.styled";
import {
  Box,
  Button,
  Form,
  Input,
  Title,
} from "../componants/Setname/Setname.styled";

const Setname = ({ getname }) => {
  const [name, setname] = useState("");

  const onChange = (e) => {
    setname(e.target.value);
  };

  const setName = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    getname(name);
  };

  return (
    <Container image="https://cdn.pixabay.com/photo/2014/07/01/15/40/balloon-381334_1280.png">
      <Box>
        <Title>
          <h2>Set your Nickname</h2>
        </Title>
        <Form onSubmit={setName}>
          <Input onChange={onChange} />
          <Button>Set name</Button>
        </Form>
      </Box>
    </Container>
  );
};

export default Setname;
