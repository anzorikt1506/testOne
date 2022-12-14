import React from 'react'
import {useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import {
  objectSlice, object_update_table,
} from "../../store/reducers/objectSlice";
import { roles_out } from '../../store/reducers/rolesSlice';
import { tasksSlice } from '../../store/reducers/tasksSlice';
import Topbar from './Topbar';


const SpisObjectTabC: React.FC = () => {
  const dispatch = useAppDispatch();
  const {name,status} = useAppSelector((state) => state.rolesSlice);
  // const name = object.filter((object)=>{return object.id == id_object})
  // const [nameObject1, nameOnject1F] = useState<string>(`${name[0].name}`);
  const  logoutF = () =>{
     dispatch(roles_out());
  }

    
const shov = () => {dispatch(tasksSlice.actions.select_tasks(0))}
const shov1 = () => {dispatch(tasksSlice.actions.select_tasks(1))}   

  
  return (
    <Topbar
    logoutF={logoutF}
    name={name}
    shov={shov}
    shov1={shov1}
    status={status}
    />
  );
}

export default React.memo(SpisObjectTabC) ;
