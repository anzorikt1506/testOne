import { eventNames } from "process";
import React from "react";
import {Idepartment, IObject, Itasks, str_numIn } from "../../inteface/standartInP";
interface ObjectF {
  sortF: (e:any)=>void,
  namedepartment:string,
  department:Idepartment[];
}
const DepartmentSortTasks: React.FC<ObjectF> = ({
  sortF,
  namedepartment,
  department
}) => {

  return (
    <>



<div className="dropdown" style={{float:'left'}}>
   <i className="fa fa-arrow-right" aria-hidden="true">  </i>    
  <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {namedepartment}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu">
    <button onClick={sortF} role='-1' className="dropdown-item" name="depatment" type="button">Все</button>
    {department.map((department)=>(
      <>
      <button key={department.id} onClick={sortF} role={`${department.id}`} className="dropdown-item"  name="depatment" type="button">{department.name}</button>
      </>
    ))}
    
    

  </div>
  </div>
    </>
  );
};

export default  React.memo(DepartmentSortTasks);
