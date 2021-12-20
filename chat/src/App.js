import Global from "./componants/layout/Global.styled";
import { useEffect, useState } from "react";
import Chat from "./page/Chat";
import Setname from "./page/Setname";

/**
 *
 * @returns
 */

const App = () => {
  const [user, setuser] = useState();

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      setuser(JSON.parse(user));
    }
    return () => {};
  }, []);

  useEffect(() => {
    console.log(user);
    return () => {};
  }, [user]);

  return (
    <>
      <Global />
      {user ? (
        <Chat user={user} getname={setuser} />
      ) : (
        <Setname getname={setuser} />
      )}
    </>
  );
};

export default App;
