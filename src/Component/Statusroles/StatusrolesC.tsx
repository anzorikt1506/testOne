import React from 'react'
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { roles_option } from '../../store/reducers/rolesSlice';
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
   dispatch(roles_option(event.target.role, event.target.id)) 
   statusidF(event.target.id)
  }
  return (
    <Statusroles
    id_roles={id_roles}
    rolesStatus={rolesStatus}
    statusMF={statusMF}
    statusRed={statusRed}
    />
  );
}

export default React.memo(StatusrolesC) ;