import { eventNames } from "process";
import React from "react";
import {IObject, Itasks, str_numIn } from "../../inteface/standartInP";
interface ObjectF {
  sortF: (e:any)=>void,
  namebuilding:string,
}
const BuildingSortTasks: React.FC<ObjectF> = ({
  sortF,
  namebuilding
}) => {

  return (
    <>


 
<div  className="dropdown1" style={{float:'left'}}>
  <i className="fa fa-arrow-right" aria-hidden="true">  </i>  
  <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {namebuilding}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
    <button key={1} onClick={sortF} id='-1' role='-1' className="dropdown-item" name="building" type="button">Все</button>
    <button key={2} onClick={sortF} id='0' role='0' className="dropdown-item"  name="building" type="button">Гостиница</button>
    <button key={3} onClick={sortF} id='1' role='1' className="dropdown-item"  name="building" type="button">ЛОК</button>
  </div>
  </div>
    </>
  );
};

export default  React.memo(BuildingSortTasks);
