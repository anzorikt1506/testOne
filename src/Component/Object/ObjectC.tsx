import React from 'react'
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import {
  objectSlice,
  object_add_API,
  object_add_API_spis,
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
    />
  );
}

export default React.memo(ObjectC) ;
