import { eventNames } from "process";
import React from "react";
import { useState } from "react";
import { useAppDispatch } from "../../hook/redux";
import { roles_avtoriz } from "../../store/reducers/rolesSlice";
import Login from "./Login";


// interface ObjectF {

// }
const LoginC: React.FC = ({

}) => {
    const dispatch = useAppDispatch()
    const [login, loginF] = useState<string>('');
    const [password, passwordF] = useState<string>('');
    const changeLogin = (e:any) => loginF(e.target.value)
    const changePassword = (e:any) => passwordF(e.target.value)
    const avtoriz = () => dispatch(roles_avtoriz(login,password))
  return (
   <Login
   login={login}
   password={password}
   changeLogin={changeLogin}
   changePassword={changePassword}
   avtoriz={avtoriz}
   />
  );
};

export default  React.memo(LoginC);
