import React from "react";
import { Header } from "../componants/Chat/Chat.styled";

const Chat = ({ name }) => {
  return (
    <Header>
      <h1>{name}</h1>{" "}
    </Header>
  );
};

export default Chat;
