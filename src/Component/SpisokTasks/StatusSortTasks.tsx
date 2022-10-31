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
    <button key={1} onClick={sortF} id='-1' role='-1' className="dropdown-item" name="status" type="button">Все</button>
    <button key={2} onClick={sortF} id='0' role='0' className="dropdown-item"  name="status" type="button">Ждёт выполнения</button>
    <button key={3} onClick={sortF} id='1' role='1' className="dropdown-item"  name="status" type="button">Выполняется</button>
    <button key={4} onClick={sortF} id='2' role='2' className="dropdown-item"  name="status" type="button">Выполнена</button>
    <button key={5} onClick={sortF} id='3' role='3' className="dropdown-item"  name="status" type="button">Не выполнена</button>
  </div>
  </div>
    </>
  );
};

export default  React.memo(StatusSortTasks);
