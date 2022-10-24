import { eventNames } from "process";
import React from "react";
import {IObject, Itasks, str_numIn } from "../../inteface/standartInP";
interface ObjectF {
  sortF: (e:any)=>void,
  nameStatus:string,
}
const StatusSortTasks: React.FC<ObjectF> = ({
  sortF,
  nameStatus,
}) => {

  return (
    <>



<div className="dropdown" style={{float:'left'}}>
   <i className="fa fa-arrow-right" aria-hidden="true">  </i>    
  <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {nameStatus}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu">
    <button onClick={sortF} role='-1' className="dropdown-item" name="status" type="button">Все</button>
    <button onClick={sortF} role='0' className="dropdown-item"  name="status" type="button">Ждёт выполнения</button>
    <button onClick={sortF} role='1' className="dropdown-item"  name="status" type="button">Выполняется</button>
    <button onClick={sortF} role='2' className="dropdown-item"  name="status" type="button">Выполнена</button>
    <button onClick={sortF} role='3' className="dropdown-item"  name="status" type="button">Не выполнена</button>
  </div>
  </div>
    </>
  );
};

export default  React.memo(StatusSortTasks);
