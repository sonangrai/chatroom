import Global from "./componants/layout/Global.styled";
import { useEffect, useState } from "react";
import Chat from "./page/Chat";
import Setname from "./page/Setname";

/**
 *
 * @returns
 */

const App = () => {
  const [user, setuser] = useState("");

  useEffect(() => {
    let user = localStorage.getItem("name");
    if (user) {
      setuser(user);
    }
    return () => {};
  }, []);

  return (
    <>
      <Global />
      {user ? (
        <Chat name={user} getname={setuser} />
      ) : (
        <Setname getname={setuser} />
      )}
    </>
  );
};

export default App;
