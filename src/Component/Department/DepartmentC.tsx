import React from 'react'
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import {
  departmentSlice,
  department_add_API,
  department_add_API_spis,
  department_red_name,
  depatment_del
} from "../../store/reducers/departmentSlice";
import { roles_add_API_spis } from '../../store/reducers/rolesSlice';

import Department from './Department';
const ObjectC = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading, department, verithik, booleanverithik } =
    useAppSelector((state) => state.departmentSlice);
    const { selected, object} = useAppSelector((state) => state.objectSlice);
  useEffect(() => {
      dispatch(department_add_API_spis(''));
      dispatch(roles_add_API_spis());
  }, []);
  
  const [show, fshow] = useState<boolean>(false);
  const [veryfic, veryficf] = useState<string>("");
  const [departmentName, fmodals] = useState<string>("");
  
  const name = (event: any) => {
    fmodals(event.target.value);
  };
  const addObject = () => {
    switch (true) {
      case departmentName == "": // if (x === 'value1')
        veryficf("Поле пустое");
        fshow(true);
        dispatch(departmentSlice.actions.departament_falseVerithik(false));
        break;
      case departmentName.length < 3: // if (x === 'value2')
        veryficf("Не меннее трёх символов");
        fshow(true);
        dispatch(departmentSlice.actions.departament_falseVerithik(false));
        break;
      case selected == 0: // if (x === 'value2')
        veryficf("Не выбран объект");
        fshow(true);
        dispatch(departmentSlice.actions.departament_falseVerithik(false));
        break;  
      default:
        dispatch(department_add_API(`${departmentName}`,selected));
        fmodals("");
        veryficf("Поле пустое");
        fshow(false);
        dispatch(departmentSlice.actions.departament_falseVerithik(false));
    }
  };

  const red = (event:any) => {
    const slot = event.target.slot
    const id = event.target.className
    let new_value_object = prompt (`Введите ${event.target.innerHTML}`)
    switch (true) {
     case new_value_object == "": 
       veryficf("Поле пустое");
       fshow(true);
       dispatch(departmentSlice.actions.departament_falseVerithik(false));
       break;
     case new_value_object && new_value_object.length < 3 && slot == 'name': 
       veryficf("Не меннее трёх символов");
       fshow(true);
       dispatch(departmentSlice.actions.departament_falseVerithik(false));
       break;  
     case new_value_object === null: 
       break;    
     default:
       dispatch(department_red_name(id,`${new_value_object}`));
       fmodals("");
       veryficf("Поле пустое");
       fshow(false);
       event.target.innerHTML = new_value_object
       dispatch(departmentSlice.actions.departament_falseVerithik(false));
   }
   }

   const del = (event:any) => {
    const id_object = event.target.className
    const id = event.target.innerHTML
    let new_value_object = prompt (`${event.target.role}`)
     if (new_value_object != null){
     dispatch(depatment_del(id,id_object)) 

     }
   }

   return (
    <Department
      name={name}
      error={error}
      addObject={addObject}
      show={show}
      veryfic={veryfic}
      booleanverithik={booleanverithik}
      isLoading={isLoading}
      departmentName={departmentName}
      verithik={verithik}
      department={department}
      red={red}
      del={del}
    />
  );
}

export default React.memo(ObjectC) ;
