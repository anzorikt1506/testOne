import React from "react";
import {IRoles} from "../../inteface/standartInP";
interface ObjectF {
  sortF: (e:any)=>void,
  nameroles:string,
  roles:IRoles[];
}
const RolesSortTasks: React.FC<ObjectF> = ({
  sortF,
  nameroles,
  roles
}) => {

  return (
    <>



<div className="dropdown" style={{float:'left'}}>
   <i className="fa fa-arrow-right" aria-hidden="true">  </i>    
  <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {nameroles}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu">
    <button onClick={sortF} id='-1' role='-1' className="dropdown-item" name="roles" type="button">Все</button>
    {roles.map((department)=>(
      <>
      <button key={department.id} onClick={sortF} role={`${department.id}`} id={`${department.id}`} className="dropdown-item"  name="roles" type="button">{department.name}</button>
      </>
    ))}
    
    

  </div>
  </div>
    </>
  );
};

export default  React.memo(RolesSortTasks);
