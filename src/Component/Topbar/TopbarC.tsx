import React from 'react'
import {useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import {
  objectSlice, object_update_table,
} from "../../store/reducers/objectSlice";
import { roles_out } from '../../store/reducers/rolesSlice';
import Topbar from './Topbar';


const SpisObjectTabC: React.FC = () => {
  const dispatch = useAppDispatch();
  const {name} = useAppSelector((state) => state.rolesSlice);
  // const name = object.filter((object)=>{return object.id == id_object})
  // const [nameObject1, nameOnject1F] = useState<string>(`${name[0].name}`);
  const  logoutF = () =>{
     dispatch(roles_out());
  }

    

   

  
  return (
    <Topbar
    logoutF={logoutF}
    name={name}
    />
  );
}

export default React.memo(SpisObjectTabC) ;
