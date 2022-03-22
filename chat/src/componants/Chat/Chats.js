/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  BubbleLeft,
  BubbleRight,
  LfCont,
  Message,
  RtCont,
  User,
} from "./Bubble.styled";
import Axios from "axios";

const Chats = ({ socket, user }) => {
  const [newconnection, setnewconnection] = useState("");
  const [messages, setmessages] = useState([]);

  //Get message
  const getMessagesApi = async () => {
    let res = await Axios.get("/api/msg");
    return res.data.data;
  };
  useEffect(() => {
    getMessagesApi().then((data) => {
      setmessages(data);
    });
    return () => {};
  }, []);

  useEffect(() => {
    if (socket)
      socket.on("user connected", (data) => {
        if (data.email === user.email) {
          setnewconnection("Welcome " + user.firstname + " " + user.lastname);
          setTimeout(() => {
            setnewconnection("");
          }, 3000);
        } else {
          setnewconnection(user.firstname + " " + user.lastname + " connected");
          setTimeout(() => {
            setnewconnection("");
          }, 3000);
        }
      });
    return () => {};
  }, [socket]);

  /**
   * Get msg
   */
  useEffect(() => {
    if (socket) {
      socket.on("message-sent", (data) => {
        setmessages((messages) => [...messages, data.data]);
      });
    }
    return () => {};
  }, [socket]);

  return (
    <div>
      {newconnection !== "" && <h1>{newconnection}</h1>}
      {messages &&
        messages.map((d, i) =>
          d.user === user._id ? (
            <BubbleRight key={i}>
              <LfCont>
                <Message>{d.message}</Message>
                <User>
                  - {d.userInfo.firstname + " " + d.userInfo.lastname}
                </User>
              </LfCont>
            </BubbleRight>
          ) : (
            <BubbleLeft key={i}>
              <RtCont>
                <Message>{d.message}</Message>
                <User>-{d.userInfo.firstname + " " + d.userInfo.lastname}</User>
              </RtCont>
            </BubbleLeft>
          )
        )}
    </div>
  );
};

export default Chats;
