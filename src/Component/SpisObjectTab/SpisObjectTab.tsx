import { eventNames } from "process";
import React from "react";
import { IObject } from "../../inteface/standartInP";
interface ObjectF {
  object: IObject[];
  error: string,
  selectObject: (event:any) => void,
  name: IObject[];
}
const SpisObject: React.FC<ObjectF> = ({
  object,
  error,
  selectObject,
  name
}) => {


  return (
    <>

<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   {name.length > 0 ? name[0].name : 'Нет объектов' }
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  {error && <h1>{error}</h1>}
                {object.map((object) => (
                  
                    <a key={object.id} onClick={selectObject}   id={`${object.id}`} className="dropdown-item" href="#">{object.name}</a>
                 
                  
          ))}
  </div>
</div>

      
    </>
  );
};

export default  React.memo(SpisObject);
