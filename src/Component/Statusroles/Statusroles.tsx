import { eventNames } from "process";
import React from "react";
import { statusM } from "../../inteface/standartInP";
interface ObjectF {
  rolesStatus: string,
  statusMF: statusM[],
  id_roles:number,
  statusRed:(event:any)=>void
}
const Statusroles: React.FC <ObjectF> = ({
  rolesStatus,
  statusMF,
  id_roles,
  statusRed
  
}) => {
return(
  <>



<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  {rolesStatus}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

        {statusMF.map((statusMF)=>(
    
    <li key={statusMF.id} ><a onClick={statusRed} id={`${statusMF.id}`} role={`${id_roles}`}   className="dropdown-item" href="#">{statusMF.text}</a></li>
    ))}
  </div>
</div>








  
  
  </>
)
}
export default  React.memo(Statusroles)
