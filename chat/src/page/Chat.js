/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { Header, Textarea } from "../componants/Chat/Chat.styled";
import {
  Chatcontainer,
  Chatpage,
} from "../componants/Chat/Chatcontainer.styled";
import Chats from "../componants/Chat/Chats";
import { Sendform, Sendmsg } from "../componants/Chat/Sendmsg.styled";
import { Button } from "../componants/Setname/Setname.styled";
import io from "socket.io-client";
import { Avatar } from "../componants/Chat/Avatar.styled";

const Chat = ({ user, getname }) => {
  let chatRef = useRef();
  const [msg, setmsg] = useState();
  const [socket, setsocket] = useState();
  const newSocket = io(`/`);
  useEffect(() => {
    setsocket(newSocket);
    newSocket.emit("connected", user.fname + " " + user.lname);
    return () => {
      newSocket.close();
    };
  }, [setsocket]);

  /**
   * Logout
   */
  const logout = () => {
    localStorage.removeItem("user");
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
    setmsg("");
    let pack = {
      name: user.fname + " " + user.lname,
      msg: msg,
    };
    socket.emit("send message", pack);
    chatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Chatpage>
      <Header>
        <h1>
          <Avatar src={user.avatar} alt="user" />
          {user.fname + " " + user.lname}
        </h1>
        <span onClick={logout}>Logout</span>
      </Header>
      <Chatcontainer>
        <Chats socket={socket} name={user.fname + " " + user.lname} />
        <span
          ref={chatRef}
          style={{ display: "bloack", height: "100px" }}
        ></span>
      </Chatcontainer>
      <Sendmsg>
        <Sendform onSubmit={sendMsg}>
          <Textarea onChange={onChange} name="msg" value={msg} />
          <Button color="green">Send</Button>
        </Sendform>
      </Sendmsg>
    </Chatpage>
  );
};

export default Chat;
