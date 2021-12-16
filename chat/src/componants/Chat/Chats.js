import React, { useEffect } from "react";
import io from "socket.io-client";

const Chats = () => {
  const newSocket = io(`http://${window.location.hostname}:4000`);
  useEffect(() => {
    console.log(newSocket);
    return () => {};
  }, []);
  return <div></div>;
};

export default Chats;
