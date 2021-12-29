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
import Axios from "axios";

const Chat = ({ user, getname }) => {
  const [loading, setloading] = useState(false);
  let chatRef = useRef();
  const [msg, setmsg] = useState();
  const [socket, setsocket] = useState();
  const newSocket = io({
    path:
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_DEV_SOCKET
        : process.env.REACT_APP_PROD_SOCKET,
    transports: ["websocket"],
  });
  useEffect(() => {
    setsocket(newSocket);
    newSocket.emit("connected", user);
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

  //Send message
  const sendMsgApi = async (ms) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await Axios.post("/api/msg", ms, config).then((res) => {
      setloading(false);
    });
  };

  /**
   * send m,sg
   */
  const sendMsg = (e) => {
    e.preventDefault();
    setloading(true);
    setmsg("");
    let pack = {
      userId: user._id,
      message: msg,
    };
    sendMsgApi(JSON.stringify(pack));
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
          {user.firstname + " " + user.lastname}
        </h1>
        <span onClick={logout}>Logout</span>
      </Header>
      <Chatcontainer>
        <Chats socket={socket} user={user} />
        <span
          ref={chatRef}
          style={{ display: "bloack", height: "100px" }}
        ></span>
      </Chatcontainer>
      <Sendmsg>
        <Sendform onSubmit={sendMsg}>
          <Textarea onChange={onChange} name="msg" value={msg} />
          {!loading ? <Button color="green">Send</Button> : <>Loading</>}
        </Sendform>
      </Sendmsg>
    </Chatpage>
  );
};

export default Chat;
