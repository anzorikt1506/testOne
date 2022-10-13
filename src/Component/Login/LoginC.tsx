import { eventNames } from "process";
import React from "react";
import {useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { department_add_API_spis } from "../../store/reducers/departmentSlice";
import { object_add_API_spis } from "../../store/reducers/objectSlice";
import { roles_add_API_spis, roles_avtoriz } from "../../store/reducers/rolesSlice";
import Login from "./Login";


// interface ObjectF {

// }
const LoginC: React.FC = ({

}) => {



    const dispatch = useAppDispatch()
    const {roles} = useAppSelector((state)=>state.rolesSlice)
  useEffect(() => {
    if(roles.length == 0){
      dispatch(object_add_API_spis(""));
      dispatch(department_add_API_spis(''));
      dispatch(roles_add_API_spis());
    }

  }, []);


    const [login, loginF] = useState<string>('');
    const [id, idF] = useState<number>(0);
    const [password, passwordF] = useState<string>('');
    const changeLogin = async(e:any) => {
      loginF(e.target.innerHTML)
      idF(e.target.id) 
    }
    const changePassword = (e:any) => passwordF(e.target.value)
    const avtoriz = () => dispatch(roles_avtoriz(id,password))
  return (
   <Login
   login={login}
   password={password}
   changeLogin={changeLogin}
   changePassword={changePassword}
   avtoriz={avtoriz}
   roles={roles}
   />
  );
};

export default  React.memo(LoginC);
