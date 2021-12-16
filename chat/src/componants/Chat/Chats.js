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

const Chats = ({ socket, name }) => {
  const [newconnection, setnewconnection] = useState("");
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    if (socket)
      socket.on("user connected", (data) => {
        if (data === name) {
          setnewconnection("Welcome " + name);
          setTimeout(() => {
            setnewconnection("");
          }, 3000);
        } else {
          setnewconnection(data + " connected");
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
    if (socket)
      socket.on("msgreceived", (data) => {
        console.log(data);
        setmessages((messages) => [...messages, data]);
      });
    return () => {};
  }, [socket]);

  useEffect(() => {
    console.log(messages);
    return () => {};
  }, [messages]);

  return (
    <div>
      {newconnection !== "" && <h1>{newconnection}</h1>}
      {messages &&
        messages.map((d, i) =>
          d.name === name ? (
            <BubbleRight key={i}>
              <LfCont>
                <Message>{d.msg}</Message>
                <User>- {d.name}</User>
              </LfCont>
            </BubbleRight>
          ) : (
            <BubbleLeft key={i}>
              <RtCont>
                <Message>{d.msg}</Message>
                <User>-{d.name}</User>
              </RtCont>
            </BubbleLeft>
          )
        )}
    </div>
  );
};

export default Chats;
