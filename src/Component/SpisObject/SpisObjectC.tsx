import React from 'react'
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
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
