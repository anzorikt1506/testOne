import React from 'react'
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { department_add_API_spis, department_object } from '../../store/reducers/departmentSlice';
import {
  objectSlice,
  object_add_API_spis
} from "../../store/reducers/objectSlice";
import SpisObject from './SpisObject';
const SpisObjectC = () => {
  const dispatch = useAppDispatch();
  const {object , error, selected} = useAppSelector((state) => state.objectSlice);
  const [nameObject, nameOnjectF] = useState<string>("Выберите объект");
  const  selectObject = (event: any) =>{
   dispatch(objectSlice.actions.selectObject(event.target.id))
   nameOnjectF(event.target.text)
   dispatch(department_object(event.target.id))
  }
   const vseObject = ()=>{
    dispatch(department_add_API_spis(''));
    dispatch(objectSlice.actions.selectObject(0))
    nameOnjectF('Выбор объекта')
   }
    
     useEffect(() => {
      dispatch(object_add_API_spis(""));  
     }, []);
   

  
  return (
    <SpisObject
      object={object}
      error={error}
      selectObject = {selectObject}
      nameObject = {nameObject}
      selected = {selected}
      vseObject = {vseObject}
    />
  );
}

export default React.memo(SpisObjectC) ;