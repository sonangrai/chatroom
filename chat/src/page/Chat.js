/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Header, Textarea } from "../componants/Chat/Chat.styled";
import {
  Chatcontainer,
  Chatpage,
} from "../componants/Chat/Chatcontainer.styled";
import Chats from "../componants/Chat/Chats";
import { Sendform, Sendmsg } from "../componants/Chat/Sendmsg.styled";
import { Button } from "../componants/Setname/Setname.styled";
import io from "socket.io-client";

const Chat = ({ name, getname }) => {
  const [msg, setmsg] = useState();
  const [socket, setsocket] = useState();
  const newSocket = io(`http://${window.location.hostname}:4000`);
  useEffect(() => {
    setsocket(newSocket);
    newSocket.emit("connected", name);
    return () => {
      newSocket.close();
    };
  }, [setsocket]);

  /**
   * Logout
   */
  const logout = () => {
    localStorage.removeItem("name");
    getname("");
  };

  const onChange = (e) => {
    setmsg(e.target.value);
  };

  /**
   * send m,sg
   */
  const sendMsg = (e) => {
    e.preventDefault();
    let pack = {
      name: name,
      msg: msg,
    };
    socket.emit("send message", pack);
  };

  return (
    <Chatpage>
      <Header>
        <h1>{name}</h1>
        <span onClick={logout}>Exit</span>
      </Header>
      <Chatcontainer>
        <Chats socket={socket} name={name} />
      </Chatcontainer>
      <Sendmsg>
        <Sendform onSubmit={sendMsg}>
          <Textarea onChange={onChange} />
          <Button color="green">Send</Button>
        </Sendform>
      </Sendmsg>
    </Chatpage>
  );
};

export default Chat;
