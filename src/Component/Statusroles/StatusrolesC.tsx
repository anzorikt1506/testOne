import React from 'react'
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { roles_option, roles_red_paswword } from '../../store/reducers/rolesSlice';
import Statusroles from './Statusroles';
interface ObjectF {
  id_roles: number,
  id_status:number
}
const StatusrolesC:React.FC<ObjectF> = ({
  id_roles,
  id_status
}) => {
  const dispatch = useAppDispatch();
  const {status,roles} = useAppSelector((state) => state.rolesSlice);
  const rolesFilterName = roles.filter((roles)=>{return roles.id == id_roles})

   const red_password = (event:any) =>{
    
       const new_password = prompt(`Введите новый пароль`)
       switch(true){
        case new_password == '' || new_password == null:
          break;
        default:
          dispatch(roles_red_paswword(id_roles,new_password))  

       }
      
   }
  const statusM = [
    {id:0,text:'Работник'},
    {id:1,text:'Глава отдела'},
    {id:2,text:'Диретор объекта'},
    {id:3,text:'Администратор объекта'},
  ]
 const [statusid, statusidF] = useState<number>(id_status);

 
  const rolesStatus = statusM[statusid].text
  const statusMF = statusM.filter((statusM)=>{return statusM.id != statusid});
  const statusRed = (event:any) =>{
   dispatch(roles_option(id_roles, event.target.id)) 
   statusidF(event.target.id)
  }
  return (
    <Statusroles
    rolesStatus={rolesStatus}
    statusMF={statusMF}
    statusRed={statusRed}
    red_password={red_password}
    />
  );
}

export default React.memo(StatusrolesC) ;