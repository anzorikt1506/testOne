import React from 'react'
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import {
  departmentSlice,
  department_add_API,
  department_add_API_spis
} from "../../store/reducers/departmentSlice";
import Department from './Department';
const ObjectC = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading, department, verithik, booleanverithik } =
    useAppSelector((state) => state.departmentSlice);
    const { selected, object} = useAppSelector((state) => state.objectSlice);
  useEffect(() => {
    dispatch(department_add_API_spis(''));
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

  

  let ff
 const nameeee =  department.map((department) => ( 
  ff = object.filter(function(object) {return object.id == department.id_object;}),    
    <tr key={department.id}>
    <td>{ff[0].name}</td> 
    <td>{department.name}</td>
    </tr>
    ))

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
      nameeee = {nameeee}
    />
  );
}

export default React.memo(ObjectC) ;
