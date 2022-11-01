import React from 'react'
import {useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
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
  const [nameObject1, nameOnject1F] = useState<string>(`${Object(name).name}`);
  const  selectObject = (event:any) =>{
   dispatch(object_update_table(event.target.id,id,table))
   nameOnject1F(event.target.role)
  }

    

   

  
  return (
    <SpisObjectTab
      object={object}
      error={error}
      selectObject = {selectObject}
      nameObject1 = {nameObject1}
    />
  );
}

export default React.memo(SpisObjectTabC) ;
