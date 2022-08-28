import { eventNames } from "process";
import React from "react";
import { IObject } from "../../inteface/standartInP";
interface ObjectF {
  object: IObject[];
  error: string,
  selectObject: (event: any) => void,
  nameObject: string,
  selected: number
}
const SpisObject: React.FC<ObjectF> = ({
  object,
  error,
  selectObject,
  nameObject,
  selected
}) => {
  const fff = object.filter((object)=>(object.id == selected))
  return (
    <>

<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   {(selected == 0) ? nameObject : fff[0].name  }
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    
  {error && <h1>{error}</h1>}
                {object.map((object) => (
                  <>
                    <a key={object.id} onClick={selectObject}   id={`${object.id}`} className="dropdown-item" href="#">{object.name}</a>
                    </>
                  
          ))}
  </div>
</div>

      
    </>
  );
};

export default  React.memo(SpisObject);
