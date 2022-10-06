import { eventNames } from "process";
import React from "react";
import { useState } from "react";
import Login from "./Login";


// interface ObjectF {

// }
const LoginC: React.FC = ({

}) => {

    const [login, loginF] = useState<string>('');
    const [password, passwordF] = useState<string>('');
    const changeLogin = (e:any) => loginF(e.target.value)
    const changePassword = (e:any) => passwordF(e.target.value)
  return (
   <Login
   login={login}
   password={password}
   changeLogin={changeLogin}
   changePassword={changePassword}
   />
  );
};

export default  React.memo(LoginC);
