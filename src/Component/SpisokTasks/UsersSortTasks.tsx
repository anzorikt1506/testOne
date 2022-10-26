import React from "react";
import {IRoles, Iusers} from "../../inteface/standartInP";
interface ObjectF {
  sortF: (e:any)=>void,
  nameusers:string,
  users:Iusers[];
}
const UsersSortTasks: React.FC<ObjectF> = ({
  sortF,
  nameusers,
  users
}) => {

  return (
    <>



<div className="dropdown" style={{float:'left'}}>
   <i className="fa fa-arrow-right" aria-hidden="true">  </i>    
  <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {nameusers}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu">
    <button onClick={sortF} role='-1' className="dropdown-item" name="users" type="button">Все</button>
    {users.map((department)=>(
      <>
      <button key={department.id} onClick={sortF} role={`${department.id}`} className="dropdown-item"  name="users" type="button">{department.fio}</button>
      </>
    ))}
    
    

  </div>
  </div>
    </>
  );
};

export default  React.memo(UsersSortTasks);
