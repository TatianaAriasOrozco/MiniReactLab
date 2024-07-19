import { useState, useEffect } from "react";
import Login from "./Navegation/Login/Login";
import Navegation from "./Navegation/Navegation";

const PokeCollection = () => {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    if (localStorage.getItem('username'))
      setUserName(localStorage.getItem('username'))
  }, []);
  return (
    <>
      {userName ?
        <Navegation
          userName={userName}
          setUserName={setUserName}
        /> : <Login
          setUserName={setUserName}
        />
      }
    </>

  )
};

export default PokeCollection;
