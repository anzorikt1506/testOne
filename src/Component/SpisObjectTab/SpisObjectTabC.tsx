import React from 'react'
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { department_add_API_spis, department_object } from '../../store/reducers/departmentSlice';
import {
  objectSlice, object_update_table,
} from "../../store/reducers/objectSlice";
import SpisObjectTab from './SpisObjectTab';

interface ObjectF {
  id_object:number,
  id:number,
  table:number
}
const SpisObjectTabC: React.FC<ObjectF> = ({id_object,id,table}) => {
  const dispatch = useAppDispatch();
  const {object , error} = useAppSelector((state) => state.objectSlice);
  const name = object.filter((object)=>{return object.id == id_object})
  const  selectObject = (event:any) =>{
   dispatch(object_update_table(event.target.id,id,table))
  }

    

   

  
  return (
    <SpisObjectTab
      object={object}
      error={error}
      selectObject = {selectObject}
      name = {name}
    />
  );
}

export default React.memo(SpisObjectTabC) ;
