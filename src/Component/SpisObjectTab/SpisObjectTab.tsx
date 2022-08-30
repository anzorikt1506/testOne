import { eventNames } from "process";
import React from "react";
import { IObject } from "../../inteface/standartInP";
interface ObjectF {
  object: IObject[];
  error: string,
  selectObject: (event:any) => void,
  nameObject1: string;
}
const SpisObject: React.FC<ObjectF> = ({
  object,
  error,
  selectObject,
  nameObject1
}) => {


  return (
    <>

<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   {nameObject1}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  {error && <h1>{error}</h1>}
                {object.map((object) => (
                  
                    <a key={object.id} 
                       onClick={selectObject} 
                       role={`${object.name}`}   
                       id={`${object.id}`} 
                       className="dropdown-item" 
                       href="#">
                        {object.name}
                    </a>
                 
                  
          ))}
  </div>
</div>

      
    </>
  );
};

export default  React.memo(SpisObject);
