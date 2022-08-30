import React from 'react'
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import {
  objectSlice,
  object_add_API,
  object_add_API_spis,
  object_del_name,
  object_udate_name,
} from "../../store/reducers/objectSlice";
import Object from "./Object";
const ObjectC = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading, object, verithik, booleanverithik } =
    useAppSelector((state) => state.objectSlice);

  useEffect(() => {
   dispatch(object_add_API_spis(""));

    
  }, []);
  
  const [show, fshow] = useState<boolean>(false);
  const [veryfic, veryficf] = useState<string>("");
  const [objectName, fmodals] = useState<string>("");
  
  const name = (event: any) => {
    fmodals(event.target.value);
  };

  const red_object = (event:any) => {
    
   const slot = event.target.slot
   const id = event.target.className
   let new_value_object = prompt (`Введите ${event.target.role}`)
   switch (true) {
    case new_value_object == "": 
      veryficf("Поле пустое");
      fshow(true);
      dispatch(objectSlice.actions.falseVerithik(false));
      break;
    case new_value_object && new_value_object.length < 3 && slot == 'name': 
      veryficf("Не меннее трёх символов");
      fshow(true);
      dispatch(objectSlice.actions.falseVerithik(false));
      break;  
    case new_value_object === null: 
      break;    
    default:
      dispatch(object_udate_name(`${new_value_object}`,id));
      fmodals("");
      veryficf("Поле пустое");
      fshow(false);
      dispatch(objectSlice.actions.selectObject(0))
      dispatch(objectSlice.actions.falseVerithik(false));
  }
  }

  const del_object = (event:any) => {
    const slot = event.target.slot
    const id = event.target.className
    let new_value_object = prompt (`${event.target.role}`)
     if (new_value_object != null){
     dispatch(object_del_name(id)) 
     dispatch(objectSlice.actions.selectObject(0))
     }
   }

  const addObject = () => {
    switch (true) {
      case objectName == "": // if (x === 'value1')
        veryficf("Поле пустое");
        fshow(true);
        dispatch(objectSlice.actions.falseVerithik(false));
        break;
      case objectName.length < 3: // if (x === 'value2')
        veryficf("Не меннее трёх символов");
        fshow(true);
        dispatch(objectSlice.actions.falseVerithik(false));
        break;
      default:
        dispatch(object_add_API(`${objectName}`));
        fmodals("");
        veryficf("Поле пустое");
        fshow(false);
        dispatch(objectSlice.actions.falseVerithik(false));
        dispatch(objectSlice.actions.selectObject(0))
    }
  };

  return (
    <Object
      name={name}
      error={error}
      addObject={addObject}
      show={show}
      veryfic={veryfic}
      booleanverithik={booleanverithik}
      isLoading={isLoading}
      objectName={objectName}
      object={object}
      verithik={verithik}
      red_object={red_object}
      del_object={del_object}
    />
  );
}

export default React.memo(ObjectC) ;
