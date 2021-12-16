/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const Chats = ({ socket, name }) => {
  const [newconnection, setnewconnection] = useState("");

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

  return <div>{newconnection !== "" && <h1>{newconnection}</h1>}</div>;
};

export default Chats;
