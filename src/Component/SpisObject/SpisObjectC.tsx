import React from 'react'
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import {
  objectSlice,
  object_add_API_spis,
} from "../../store/reducers/objectSlice";
import {
  departmentSlice, department_add_API_spis
} from "../../store/reducers/departmentSlice";
import SpisObject from './SpisObject';
const SpisObjectC = () => {
  const dispatch = useAppDispatch();
  const {object , error, selected} = useAppSelector((state) => state.objectSlice);
  const {department} = useAppSelector((state) => state.departmentSlice);
  const [nameObject, nameOnjectF] = useState<string>("Выберите объект");
  const  selectObject = async(event: any) =>{
     dispatch(objectSlice.actions.selectObject(event.target.id))
     nameOnjectF(event.target.text) 
 
     dispatch(objectSlice.actions.selectObject(event.target.id))
     nameOnjectF(event.target.text)    
    await dispatch(department_add_API_spis('')); 
     let ff = department.filter((department) =>{return department.id_object == event.target.id})
     console.log(department)
     dispatch(departmentSlice.actions.departament_object(ff))
     
  

   
   
  }
   
    
     useEffect(() => {
      if(object.length == 0){
      dispatch(object_add_API_spis(""));  
      }
     }, []);
   

  
  return (
    <SpisObject
      object={object}
      error={error}
      selectObject = {selectObject}
      nameObject = {nameObject}
      selected = {selected}
    />
  );
}

export default React.memo(SpisObjectC) ;
