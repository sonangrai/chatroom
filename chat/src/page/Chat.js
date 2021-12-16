import React from "react";
import { Header, Textarea } from "../componants/Chat/Chat.styled";
import {
  Chatcontainer,
  Chatpage,
} from "../componants/Chat/Chatcontainer.styled";
import { Sendform, Sendmsg } from "../componants/Chat/Sendmsg.styled";
import { Button } from "../componants/Setname/Setname.styled";

const Chat = ({ name, getname }) => {
  const logout = () => {
    localStorage.removeItem("name");
    getname("");
  };

  return (
    <Chatpage>
      <Header>
        <h1>{name}</h1>
        <span onClick={logout}>Exit</span>
      </Header>
      <Chatcontainer>Chat here</Chatcontainer>
      <Sendmsg>
        <Sendform>
          <Textarea />
          <Button color="green">Send</Button>
        </Sendform>
      </Sendmsg>
    </Chatpage>
  );
};

export default Chat;
